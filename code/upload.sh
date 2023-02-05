#! /bin/bash
# 上传本地acapp端的内容
find code/acapp/dist/js/*.js | xargs sed -i 's/(function(){var e={/const myfunc = (function(myappid, AcWingOS){var e={/g'

find code/acapp/dist/js/*.js | xargs sed -i 's/AcWingOS:"AcWingOS"/AcWingOS:AcWingOS/g'

find code/acapp/dist/js/*.js | xargs sed -i 's/.mount("#app")}()})();/.mount(myappid)}()});/g'
 
echo "
export class Game {
    constructor(id, AcWingOS) {
    	const myappid = '#' + id;
        myfunc(myappid, AcWingOS);
    }
}" >> code/acapp/dist/js/*.js

scp code/acapp/dist/js/*.js zzq:/home/zzq/king_of_bots/acapp
scp code/acapp/dist/css/*.css zzq:/home/zzq/king_of_bots/acapp

ssh zzq 'cd /home/zzq/king_of_bots/acapp && ./rename.sh'

# 上传本地web端的内容
scp code/web/dist/* zzq:/home/zzq/king_of_bots/web