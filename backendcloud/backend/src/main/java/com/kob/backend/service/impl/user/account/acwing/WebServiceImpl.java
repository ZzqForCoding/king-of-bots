package com.kob.backend.service.impl.user.account.acwing;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.User;
import com.kob.backend.service.impl.user.account.acwing.utils.HttpClientUtil;
import com.kob.backend.service.user.account.acwing.WebService;
import com.kob.backend.utils.JwtUtil;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.time.Duration;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

@Service
public class WebServiceImpl implements WebService {
    private static final String appid = "3222";
    private static final String appSecret = "83044f24d0f54c4ea041b684f902c1f9";
    // 由于后端是restful风格接口，因此不请求后端接口，请求前端接口
    // (nginx配置会按照api路径转发到相应地方，/api开头的路由到后端，/websocket开头会路由到websocket，其他路径路由到前端)
    private static final String redirectUri = "https://app3222.acapp.acwing.com.cn:20112/user/account/acwing/web/receive_code/";
    private static final String applyAccessTokenUrl = "https://www.acwing.com/third_party/api/oauth2/access_token/";
    private static final String getUserInfo = "https://www.acwing.com/third_party/api/meta/identity/getinfo/";
    private static final Random random = new Random();
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Override
    public JSONObject applyCode() {
        JSONObject resp = new JSONObject();
        String encodeUrl = "";
        try {
            encodeUrl = URLEncoder.encode(redirectUri, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            resp.put("result", "failed");
            return resp;
        }
        StringBuilder state = new StringBuilder();
        for(int i = 0; i < 10; i++) {
            state.append((char) (random.nextInt(10) + '0'));
        }
        resp.put("result", "success");
        redisTemplate.opsForValue().set(state.toString(), "true");
        redisTemplate.expire(state.toString(), Duration.ofMinutes(10));

        String applyCodeUrl = "https://www.acwing.com/third_party/api/oauth2/web/authorize/?appid=" + appid
                + "&redirect_uri=" + redirectUri
                + "&scope=userinfo"
                + "&state=" + state;
        resp.put("apply_code_url", applyCodeUrl);
        return resp;
    }

    @Override
    public JSONObject receiveCode(String code, String state) {
        JSONObject resp = new JSONObject();

        resp.put("result", "failed");
        // 如果没有code或state、或者state和我们的不相同 意味着这不是我们的请求
        if(code == null || state == null) return resp;
        if(Boolean.FALSE.equals(redisTemplate.hasKey(state))) return resp;

        List<NameValuePair> nameValuePairs = new LinkedList<>();
        nameValuePairs.add(new BasicNameValuePair("appid", appid));
        nameValuePairs.add(new BasicNameValuePair("secret", appSecret));
        nameValuePairs.add(new BasicNameValuePair("code", code));

        // RestTemplate请求的是restful风格的接口，HttpClient可以请求http所有接口，因此HttpClient更加通用
        String getString = HttpClientUtil.get(applyAccessTokenUrl, nameValuePairs);
        if(getString == null) return resp;
        // 将请求到的信息转成json
        JSONObject getResp = JSONObject.parseObject(getString);
        String accessToken = getResp.getString("access_token");
        String openid = getResp.getString("openid");

        if(accessToken == null || openid == null) return resp;

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("openid", openid);
        // 若openid存在，直接登录
        List<User> users = userMapper.selectList(queryWrapper);
        if(!users.isEmpty()) {
            User user = users.get(0);
            String jwt = JwtUtil.createJWT(user.getId().toString());
            resp.put("result", "success");
            resp.put("jwt_token", jwt);
            return resp;
        }

        nameValuePairs = new LinkedList<>();
        nameValuePairs.add(new BasicNameValuePair("access_token", accessToken));
        nameValuePairs.add(new BasicNameValuePair("openid", openid));
        // 通过以上信息获取acwing的头像姓名
        getString = HttpClientUtil.get(getUserInfo, nameValuePairs);
        if(getString == null) return resp;
        getResp = JSONObject.parseObject(getString);
        String username = getResp.getString("username");
        String photo = getResp.getString("photo");

        if(username == null || photo == null) return resp;

        queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", username);

        // 若用户名存在，则直接返回
        users = userMapper.selectList(queryWrapper);
        if(!users.isEmpty()) {
            User user = users.get(0);
            String jwt = JwtUtil.createJWT(user.getId().toString());
            resp.put("result", "success");
            resp.put("jwt_token", jwt);
            return resp;
        }

        // 构造新的用户名
        for(int i = 0; i < 100; i++) {
            QueryWrapper<User> usernameQueryWrapper = new QueryWrapper<>();
            usernameQueryWrapper.eq("username", username);
            if(userMapper.selectList(usernameQueryWrapper).isEmpty()) break;
            username += (char)(random.nextInt(10) + '0');
            if(i == 99) return resp;
        }

        // 创建用户
        User user = new User(
                null,
                username,
                null,
                photo,
                1500,
                openid
        );
        userMapper.insert(user);
        String jwt = JwtUtil.createJWT(user.getId().toString());
        resp.put("result", "success");
        resp.put("jwt_token", jwt);
        return resp;
    }
}
