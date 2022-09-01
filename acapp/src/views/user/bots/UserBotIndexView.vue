<template>
    <ContentField>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card" style="margin-top: 20px;">
                        <div class="card-body">
                            <img :src="$store.state.user.photo" alt="" style="width: 100%">
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="card" style="margin-top: 20px">
                        <div class="card-header">
                            <span style="font-size: 130%;">我的Bot</span>
                            <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#add-bot">
                                创建Bot
                            </button>
                            <!-- Modal -->
                            <div class="modal fade" id="add-bot" tabindex="-1">
                                <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">创建Bot</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="add-bot-title" class="form-label">名称</label>
                                            <input v-model="botadd.title" type="text" class="form-control" id="add-bot-title" placeholder="请输入Bot名称">
                                        </div>
                                        <div class="mb-3">
                                            <label for="add-bot-description" class="form-label">简介</label>
                                            <textarea v-model="botadd.description" class="form-control" id="add-bot-description" rows="3" placeholder="请输入Bot简介"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="add-bot-code" class="form-label">代码</label>
                                            <VAceEditor
                                                v-model:value="botadd.content"
                                                @init="editorInit"
                                                lang="c_cpp"
                                                theme="textmate"
                                                style="height: 300px" />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div class="error-message">{{ botadd.error_message }}</div>
                                        <button type="button" class="btn btn-primary" @click="add_bot">创建</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>名称</th>
                                        <th>创建时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="bot in bots" :key="bot.id">
                                        <td>{{ bot.title }}</td>
                                        <td>{{ bot.createtime }}</td>
                                        <td>
                                            <button type="button" class="btn btn-secondary" style="margin-right: 10px;" data-bs-toggle="modal" :data-bs-target="'#update-bot-modal-' + bot.id">修改</button>
                                            <button type="button" class="btn btn-danger"  data-bs-toggle="modal" :data-bs-target="'#delete-bot-modal-' + bot.id">删除</button>
    
                                            <!-- Modal -->
                                            <div class="modal fade" :id="'update-bot-modal-' + bot.id" tabindex="-1">
                                                <div class="modal-dialog modal-xl">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">修改Bot</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="mb-3">
                                                            <label for="add-bot-title" class="form-label">名称</label>
                                                            <input v-model="bot.title" type="text" class="form-control" id="add-bot-title" placeholder="请输入Bot名称">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="add-bot-description" class="form-label">简介</label>
                                                            <textarea v-model="bot.description" class="form-control" id="add-bot-description" rows="3" placeholder="请输入Bot简介"></textarea>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="add-bot-code" class="form-label">代码</label>
                                                            <VAceEditor
                                                                v-model:value="bot.content"
                                                                @init="editorInit"
                                                                lang="c_cpp"
                                                                theme="textmate"
                                                                style="height: 300px" />
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <div class="error-message">{{ botadd.error_message }}</div>
                                                        <button type="button" class="btn btn-primary" @click="update_bot(bot)">保存修改</button>
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
    
                                            <!-- Modal -->
                                            <div class="modal fade" :id="'delete-bot-modal-' + bot.id" tabindex="-1">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">删除Bot</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            您确认删除标题为：{{ bot.title }} 的Bot吗？
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-danger" @click="remove_bot(bot)">确认删除</button>
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContentField>
</template>

<script>
import { ref, reactive } from 'vue';
import $ from 'jquery';
import { useStore } from 'vuex';
import { Modal } from 'bootstrap/dist/js/bootstrap';
import { VAceEditor } from 'vue3-ace-editor';
import * as ace from 'ace-builds';
import ContentField from '@/components/ContentField.vue';

export default {
    components: {
    VAceEditor,
    ContentField,
},
    setup() {
        ace.config.set(
            "basePath", 
            "https://cdn.jsdelivr.net/npm/ace-builds@" + require('ace-builds').version + "/src-noconflict/");

        const store = useStore();
        let bots = ref([]);

        const botadd = reactive({
            title: "",
            description: "",
            content: "",
            error_message: "",
        });

        const refresh_bots = () => {
            $.ajax({
                url: "https://app3222.acapp.acwing.com.cn:20112/api/user/bot/getlist/",
                type: "get",
                headers: {
                    'Authorization': "Bearer " + store.state.user.token,
                },
                success(resp) {
                    bots.value = resp;
                }
            })
        };

        refresh_bots();

        const add_bot = () => {
            botadd.error_message = "";
            $.ajax({
                url: "https://app3222.acapp.acwing.com.cn:20112/api/user/bot/add/",
                type: "post",
                data: {
                    title: botadd.title,
                    description: botadd.description,
                    content: botadd.content,
                },
                headers: {
                    Authorization: "Bearer " + store.state.user.token,
                },
                success(resp) {
                    if(resp.error_message === "success") {
                        botadd.title = "";
                        botadd.description = "";
                        botadd.content = "";
                        Modal.getInstance("#add-bot").hide();
                        refresh_bots();
                    } else {
                        botadd.error_message = resp.error_message;
                    }
                }
            });
        };

        const remove_bot = (bot) => {
            $.ajax({
                url: "https://app3222.acapp.acwing.com.cn:20112/api/user/bot/remove/",
                type: "post",
                data: {
                    bot_id: bot.id,
                },
                headers: {
                    Authorization: "Bearer " + store.state.user.token,
                },
                success(resp) {
                    if(resp.error_message === "success") {
                        Modal.getInstance('#delete-bot-modal-' + bot.id).hide();
                        refresh_bots();
                    }
                }
            })
        };

        const update_bot = (bot) => {
            botadd.error_message = "";
            $.ajax({
                url: "https://app3222.acapp.acwing.com.cn:20112/api/user/bot/update/",
                type: "post",
                data: {
                    bot_id: bot.id,
                    title: bot.title,
                    description: bot.description,
                    content: bot.content,
                },
                headers: {
                    Authorization: "Bearer " + store.state.user.token,
                },
                success(resp) {
                    if(resp.error_message === "success") {
                        Modal.getInstance('#update-bot-modal-' + bot.id).hide();
                        refresh_bots();
                    } else {
                        botadd.error_message = resp.error_message;
                    }
                }
            });
        };

        const editorInit = (editor) => {
            editor.renderer.setShowPrintMargin(false);
        }

        return {
            bots,
            botadd,
            add_bot,
            update_bot,
            remove_bot,
            editorInit,
        }
    }
}
</script>

<style scoped>
div.error-message {
    color: red;
}
</style>