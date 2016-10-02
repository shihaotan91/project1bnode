var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '40px Arial';

var x = 30;
var spdX = 50;
var y = 40;
var spdY = 10;

var HEIGHT = 400
var WIDTH = 700

var message = 'bouncing'

function update(){
        x += spdX;
        y += spdY;
        ctx.fillText('P',x,y);
        console.log('hello',x);

        if(x > WIDTH){
        console.log(message);
        spdX = -spdX
        }
        if(x < 0){
        console.log(message);
        spdX = -spdX
        }
        if(y > HEIGHT){
        console.log(message);
        spdY = -spdY
        }
        if(y < 0){
        console.log(message);
        spdY = -spdY
        }
}

setInterval(update,40);
