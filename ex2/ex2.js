let Temperature = function (doC) {
    this.doC=doC;
    this.doF=function changeF() {
        return (1.8*doC +32);
    }
    this.doK=function changeCal() {
        return (doC+273);
    }
}
let temperatureC= new Temperature(25);
document.write("chuyen sang do F la " +temperatureC.doF());
document.write("chuyen sang do K la "+temperatureC.doK());