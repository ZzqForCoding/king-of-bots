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
        const jwt_token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlOWNhNjk1MzhjYzg0MDA0YmMyYzZiYzJhMzEwNDhjMiIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY2MTkzODg0NSwiZXhwIjoxNjYzMTQ4NDQ1fQ.ybk3los1-vaVUAY-4T31Ko_SMw2hTI9SQQoUpwtSLgE";
        if(jwt_token) {
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
            store.commit("updatePullingInfo", false);
        }
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
