const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.has_called_start = false;
        this.timedelta = 0;
    }

    start() {

    }

    update() {

    }

    on_destroy() {

    }

    destroy() {
        this.on_destroy();
        for(let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if(obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp;
const step = tiemstamp => {
    for(let obj of AC_GAME_OBJECTS) {
        if(!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = tiemstamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = tiemstamp;
    requestAnimationFrame(step);
}

requestAnimationFrame(step);