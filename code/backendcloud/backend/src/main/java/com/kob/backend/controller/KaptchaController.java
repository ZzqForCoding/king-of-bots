package com.kob.backend.controller;

import com.google.code.kaptcha.Producer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.util.FastByteArrayOutputStream;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

@RestController
public class KaptchaController {
    @Resource(name = "captchaProducer")
    private Producer captchaProducer;

    @Resource(name = "captchaProducerMath")
    private Producer captchaProducerMath;
    @Autowired
    private RedisTemplate<String,Object> redisTemplate;

    @GetMapping("/api/getKaptcha")
    @ResponseBody
    public Map<String,Object> getKaptcha(@RequestParam String captchaType){
        Map<String,Object> resultMap = new HashMap<>();

        // 保存验证码信息
        String uuid = UUID.randomUUID().toString();
        String verifyKey = "captcha_codes:" + uuid;

        String capStr = null, code = null;
        BufferedImage image = null;
        // 生成验证码
        if ("math".equals(captchaType))
        {
            //数学运算验证码
            String capText = captchaProducerMath.createText();
            capStr = capText.substring(0, capText.lastIndexOf("@"));
            code = capText.substring(capText.lastIndexOf("@") + 1);
            image = captchaProducerMath.createImage(capStr);
        }
        else if ("char".equals(captchaType))
        {
            //图形验证码
            capStr = code = captchaProducer.createText();
            image = captchaProducer.createImage(capStr);
        }

        // 转换流信息写出
        FastByteArrayOutputStream os = new FastByteArrayOutputStream();
        try
        {
            ImageIO.write(image, "jpg", os);
        }
        catch (IOException e)
        {
            return resultMap;
        }

        //将验证码信息塞入redis中
        //code是验证码答案
        redisTemplate.opsForValue().set(verifyKey, code, 2, TimeUnit.MINUTES);

        resultMap.put("error_message", "success");
        resultMap.put("uuid", uuid);
        resultMap.put("img", Base64.getEncoder().encodeToString(os.toByteArray()));
        return resultMap;
    }
}