class Mobie {
    constructor(battery, status, message,arrmessage_curren, arrmessage_received, arrmessage_send)
    {
        this.message = message;
        this.arrmessage_received = [];
        this.arrmessage_send = [];
        this.arrmesssage_curren = [];
        this.status = true;
        this.battery=100;
    }
    getStatus(){
        return this.status;
    }
    setStatus(value) {
        this.status = value;
        if (this.status==false){
            alert("bat may len roi lam gi thi lam");
        }
    }
    getBattery(){
        return this.battery;
    }
    writeMessage(input) {
        if(this.getStatus()) {
            this.arrmesssage_curren.push(input);
            this.battery--;
        }
    }
    setmessage(input) {
        if (this.getStatus()) {
            this.message = input;
            this.battery--;
        }
    }

    getmessage() {
        if (this.getStatus()) {
        return this.message;
            this.battery--;
        }
    }
    sendmessage(message, obj) {
        if (this.getStatus()) {
        obj.setmessage(message);
        obj.arrmessage_received.push(message);
        this.arrmessage_send.push(message);
        obj.battery--;
        this.battery--;
        }
    }
}
var iphone = new Mobie();
var android = new Mobie();
android.setStatus(true);
iphone.setStatus(true)
console.log(android.status);
console.log(iphone.status);
iphone.sendmessage('tao la iphone', android);
console.log("tin nhan nhan duoc cua androi la: "+android.getmessage());
console.log("androi dang soan tin nhan: " +iphone.arrmesssage_curren);
console.log("pin cua iphone con lai la: "+iphone.battery);
console.log("pin cua androi con lai la: "+android.battery);
