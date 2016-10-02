//canvas

var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '40px Arial';

//player specs
var x = 30;
var spdX = 50;
var y = 40;
var spdY = 10;
var name = 'P'

//enemy specs
var enemy_x = 130;
var enemy_spdX = 30;
var enemy_y = 80;
var enemy_spdY = 20;
var enemy_name = 'E'

//canvas size
var HEIGHT = 400
var WIDTH = 700

var message = 'bouncing'

function update(){

       //player
        x += spdX;
        y += spdY;
        ctx.fillText(name,x,y);
        console.log('hello',x);

        if(x > WIDTH || x < 0){
        console.log(message);
        spdX = -spdX
        }
        if(y > HEIGHT || y < 0){
        console.log(message);
        spdY = -spdY
        }

        //enemy
        enemy_x += enemy_spdX;
        enemy_y += enemy_spdY;
        ctx.fillText(enemy_name,enemy_x,enemy_y);
        console.log('hello',enemy_x);

        if(enemy_x > WIDTH || enemy_x < 0){
        console.log(message);
        enemy_spdX = -enemy_spdX
        }
        if(enemy_y > HEIGHT || enemy_y < 0){
        console.log(message);
        enemy_spdY = -enemy_spdY
        }
}

setInterval(update,40);
