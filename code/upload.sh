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

# 执行服务器脚本并将服务器中的jar包和js、css文件删除
ssh zzq 'test -e app.js  && rm app.js \
	&& test -e app.css && rm app.css
	&& rm /home/zzq/king_of_bots/backendcloud/backend-0.0.1-SNAPSHOT.jar \
	&& rm /home/zzq/king_of_bots/backendcloud/matchingsystem-0.0.1-SNAPSHOT.jar \
	&& rm /home/zzq/king_of_bots/backendcloud/botrunningsystem-0.0.1-SNAPSHOT.jar'


scp acapp/dist/js/*.js zzq:/home/zzq/king_of_bots/acapp/app.js
scp acapp/dist/css/*.css zzq:/home/zzq/king_of_bots/acapp/app.css

# 上传本地web端的内容
scp -r web/dist/* zzq:/home/zzq/king_of_bots/web

# 上传后端jar包
scp backendcloud/backend/target/backend-0.0.1-SNAPSHOT.jar zzq:/home/zzq/king_of_bots/backendcloud
scp backendcloud/matchingsystem/target/matchingsystem-0.0.1-SNAPSHOT.jar zzq:/home/zzq/king_of_bots/backendcloud
scp backendcloud/botrunningsystem/target/botrunningsystem-0.0.1-SNAPSHOT.jar zzq:/home/zzq/king_of_bots/backendcloud
