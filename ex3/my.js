class Mobie {
    constructor(message, status, battery, arrmessage_received, arrmessage_send) {
        this.message = message;
        this.status = true;
        this.battery = 0;
        this.arrmessage_received = [];
        this.arrmessage_send = [];
    }
    setmessage(input) {
            this.message = input;
            this.battery--;
    }

    getmessage() {
            return this.message;
            this.battery--;
    }

    sendmessage(message, obj) {
            obj.setmessage(message);
            obj.arrmessage_received.push(message);
            this.arrmessage_send.push(message);
            this.battery--
    }
    charngbattery() {
        this.battery++;
    }
}

var iphone = new Mobie();
var android = new Mobie();
iphone.charngbattery();
android.charngbattery();
iphone.sendmessage('chao may', android);
var ipmes = android.getmessage();
console.log(ipmes);
console.log(android.arrmessage_received);
console.log(iphone.arrmessage_send);
console.log(iphone.battery);