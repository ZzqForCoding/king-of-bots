#! /bin/bash

find dist/js/*.js | xargs sed -i 's/(function(){var e={/const myfunc = (function(myappid, AcWingOS){var e={/g'

find dist/js/*.js | xargs sed -i 's/AcWingOS:"AcWingOS"/AcWingOS:AcWingOS/g'

find dist/js/*.js | xargs sed -i 's/.mount("#app")}()})();/.mount(myappid)}()});/g'
 
echo "
 
export class Game {
    constructor(id, AcWingOS) {
    	const myappid = '#' + id;
        myfunc(myappid, AcWingOS);
    }
}" >> dist/js/*.js

scp dist/js/*.js springboot:kob/acapp
scp dist/css/*.css springboot:kob/acapp

ssh springboot 'cd kob/acapp && ./rename.sh'

