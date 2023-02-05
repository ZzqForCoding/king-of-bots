#! /bin/bash
# 上传本地acapp端的内容
find acapp/dist/js/*.js | xargs sed -i 's/(function(){var e={/const myfunc = (function(myappid, AcWingOS){var e={/g'

find acapp/dist/js/*.js | xargs sed -i 's/AcWingOS:"AcWingOS"/AcWingOS:AcWingOS/g'

find acapp/dist/js/*.js | xargs sed -i 's/.mount("#app")}()})();/.mount(myappid)}()});/g'
 
echo "
export class Game {
    constructor(id, AcWingOS) {
    	const myappid = '#' + id;
        myfunc(myappid, AcWingOS);
    }
}" >> acapp/dist/js/*.js

scp acapp/dist/js/*.js zzq:/home/zzq/king_of_bots/acapp
scp acapp/dist/css/*.css zzq:/home/zzq/king_of_bots/acapp

# 上传本地web端的内容
scp -r web/dist/* zzq:/home/zzq/king_of_bots/web

# 上传后端jar包
scp backendcloud\backend\target\backend-0.0.1-SNAPSHOT.jar zzq:/home/zzq/king_of_bots/backendcloud
scp backendcloud\matchingsystem\target\matchingsystem-0.0.1-SNAPSHOT.jar zzq:/home/zzq/king_of_bots/backendcloud
scp backendcloud\botrunningsystem\target\botrunningsystem-0.0.1-SNAPSHOT.jar zzq:/home/zzq/king_of_bots/backendcloud

# 将本地代码git提交
git add .
git commit -m "$1"
git push

# 执行服务器脚本并将服务器代码git提交
ssh zzq 'cd /home/zzq/king_of_bots && acapp/rename.sh && git pull && git add . && git commit -m "提交本地代码至服务器" && git push'


