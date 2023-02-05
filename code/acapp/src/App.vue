<template>
    <div class="game-body">
        <MenuView v-if="$store.state.router.router_name === 'menu'" />
        <PkIndexViewVue v-else-if="$store.state.router.router_name === 'pk'" />
        <RecordIndexViewVue v-else-if="$store.state.router.router_name === 'record'" />
        <RecordContentViewVue v-else-if="$store.state.router.router_name === 'record_content'" />
        <RankListViewVue v-else-if="$store.state.router.router_name === 'ranklist'" />
        <UserBotIndexViewVue v-else-if="$store.state.router.router_name === 'user_bot'" />
    </div>
</template>

<script>
import { useStore } from 'vuex';
import MenuView from './views/MenuView.vue';
import PkIndexViewVue from './views/pk/PkIndexView.vue';
import RecordIndexViewVue from './views/record/RecordIndexView.vue';
import RecordContentViewVue from './views/record/RecordContentView.vue';
import RankListViewVue from './views/ranklist/RankListView.vue';
import UserBotIndexViewVue from './views/user/bots/UserBotIndexView.vue';
import $ from 'jquery';

export default {
    name: "App",
    components: {
        MenuView,
        PkIndexViewVue,
        RecordIndexViewVue,
        RecordContentViewVue,
        RankListViewVue,
        UserBotIndexViewVue,
    },
    setup() {
        const store = useStore();

        $.ajax({
            url: "https://app3222.acapp.acwing.com.cn:20022/api/user/account/acwing/acapp/apply_code/",
            type: "GET",
            success: resp => {
                if(resp.result === "success") {
                    store.state.user.AcWingOS.api.oauth2.authorize(resp.appid, resp.redirect_uri, resp.scope, resp.state, resp => {
                        if(resp.result === "success") {
                            const jwt_token = resp.jwt_token;
                            store.commit("updateToken", jwt_token);
                            store.dispatch("getinfo", {
                                success() {
                                    store.commit("updatePullingInfo", false);
                                },
                                error() {
                                    store.commit("updatePullingInfo", false);
                                }
                            });
                        } else {
                            store.state.user.AcWingOS.api.window.close();
                        }
                    });
                } else {
                    store.state.user.AcWingOS.api.window.close();
                }
            }
        });
    }
}
</script>

<style scoped>
body {
    margin: 0;
}
div.game-body {
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/background.png");
    background-size: cover;
}

div.window {
    width: 100vw;
    height: 100vh;
}
</style>
