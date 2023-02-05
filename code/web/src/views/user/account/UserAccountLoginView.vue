<template>
    <ContentField v-if="!$store.state.user.pulling_info">
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名</label>
                        <input v-model="username" type="text" class="form-control" id="username" placeholder="请输入用户名">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password" type="password" class="form-control" id="password"
                            placeholder="请输入密码">
                    </div>
                    <div class="mb-3">
                        <label for="kaptcha" class="form-label">验证码</label>
                        <div class="row">
                            <div class="col-7">
                                <input v-model="kaptcha" type="text" class="form-control" id="kaptcha"
                                    placeholder="请输入验证码">
                            </div>
                            <div class="col-5">
                                <img ref="kaptcha_img" src="" alt="" @click="get_kaptcha" class="captcha-img">
                            </div>
                        </div>
                    </div>
                    <div class="error-message">{{ error_message }}</div>
                    <button type="submit" class="btn btn-primary">提交</button>
                </form>
                <div style="text-align: center; margin-top: 20px; cursor: pointer;" @click="acwing_login">
                    <img width="30"
                        src="https://cdn.acwing.com/media/article/image/2022/09/06/1_32f001fd2d-acwing_logo.png" alt="">
                    <br>
                    AcWing一键登录
                </div>
            </div>
        </div>
    </ContentField>
</template>

<script>
import ContentField from '../../../components/ContentField.vue';
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
import router from '../../../router/index';
import $ from 'jquery';

export default {
    components: {
        ContentField,
    },
    setup() {
        const store = useStore();
        let username = ref('');
        let password = ref('');
        let kaptcha = ref('');
        let kaptcha_img = ref('');
        let kaptcha_uuid = ref('');
        let error_message = ref('');

        const jwt_token = localStorage.getItem("jwt_token");
        if (jwt_token) {
            store.commit("updateToken", jwt_token);
            store.dispatch("getinfo", {
                success() {
                    router.push({ name: "home" });
                    store.commit("updatePullingInfo", false);
                },
                error() {
                    store.commit("updatePullingInfo", false);
                }
            });
        } else {
            store.commit("updatePullingInfo", false);
        }

        const login = () => {
            error_message.value = "";
            store.dispatch("login", {
                username: username.value,
                password: password.value,
                kaptcha: kaptcha.value,
                kaptcha_uuid: kaptcha_uuid.value,
                success() {
                    store.dispatch("getinfo", {
                        success() {
                            router.push({ name: 'home' });
                        }
                    });
                },
                error(resp) {
                    get_kaptcha();
                    if (resp.statusText === "error")
                        error_message.value = "用户名或密码错误";
                    else
                        error_message.value = resp.error_message;
                },
            });
        };

        const get_kaptcha = () => {
            if (store.state.user.pulling_info) return;
            let t = Math.random();
            let type;
            if (t < 0.5) type = "math";
            else type = "char";
            $.ajax({
                url: "https://app3222.acapp.acwing.com.cn:20022/api/getKaptcha?captchaType=" + type,
                type: "get",
                success(resp) {
                    if (resp.error_message === "success") {
                        kaptcha_img.value.src = "data:image/gif;base64," + resp.img;
                        kaptcha_uuid.value = resp.uuid;
                    }
                }
            });
        };

        const acwing_login = () => {
            $.ajax({
                url: "https://app3222.acapp.acwing.com.cn:20022/api/user/account/acwing/web/apply_code/",
                type: "GET",
                success: resp => {
                    if (resp.result === "success") {
                        window.location.replace(resp.apply_code_url)
                    }
                }
            });
        }

        onMounted(() => {
            get_kaptcha();
        });

        return {
            username,
            password,
            kaptcha,
            kaptcha_img,
            kaptcha_uuid,
            get_kaptcha,
            error_message,
            login,
            acwing_login,
        }
    }
}
</script>

<style scoped>
button {
    width: 100%;
}

div.error-message {
    color: red;
}

img.captcha-img {
    width: 100%;
}
</style>