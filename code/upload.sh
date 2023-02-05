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

ssh zzq 'cd /home/zzq/king_of_bots/acapp && ./rename.sh'

# 上传本地web端的内容
scp -r web/dist/* zzq:/home/zzq/king_of_bots/web
