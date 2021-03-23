function Rectangle(x, y, cd, cr) {
    this.cd = cd;
    this.cr = cr;
    this.x = x;
    this.y = y;
    this.ctx = document.getElementById("mycanvas").getContext("2d");
    this.dientich = function () {
        return cd * cr;
    };
    this.chuvi = function () {
        return 2 * (cr + cd);
    }
    this.display = function () {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.cd, this.cr);
        this.ctx.stroke();

    }
}

let width = parseInt(prompt("nhap cr"));
let height = parseInt(prompt("nhap cd"));
let x = parseInt(prompt("nhap x"));
let y = parseInt(prompt("nhap y"));
var chunhat = new Rectangle(x, y, width, height);
document.write("chu vi là " + chunhat.chuvi());
document.write("Dien tich la " + chunhat.dientich());
chunhat.display();