function setup() {
    createCanvas(600, 600);
    background(0);
    clr = [
        color(255),
        color(232, 111, 111),
        color(230, 160, 89),
        color(230, 206, 120),
        color(255),
        color(118, 182, 222),
        color(113, 121, 227),
        color(129, 227, 225),
        color(255)
    ];
}
Number.prototype.butisitprime = function() {
    if(this <= 1) {
        return false;
    } else if(this === 2) {
        return true;
    }
    for(var i = 2; i < Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}
var clr;
var scl = 0.005;
var n = 1;
function PrimeSpace() {
    angleMode = "radians";
    strokeWeight(Math.round(Math.random() * 2.5));
    stroke(clr[Math.floor(Math.random() * 9)]);
    for(var i = 0; i < 101 - scl * 500; i++) {
        var x = 300 + scl * n * Math.cos(n);
        var y = 300 + scl * n * Math.sin(n);
        if(n.butisitprime()) {
            point(x, y);
        }
        n++;
    }
}
var time = 0;
var rot = 0;
var PrimeSpaceImg;
function draw() {
    time++;
    PrimeSpace();
    if(time === 600) {
        PrimeSpaceImg = get(0, 0, 600, 600);
    }
    if(time > 600) {
        background(0);
        push();
        translate(300, 300);
        rotate(rot);
        imageMode(CENTER);
        image(PrimeSpaceImg, 0, 0, 600, 600);
        imageMode(CORNER);
        pop();
        rot -= 0.00048828125;
    }
}