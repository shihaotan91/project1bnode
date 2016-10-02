//canvas

var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '40px Arial';

//player specs
// var x = 30;
// var spdX = 50;
// var y = 40;
// var spdY = 10;
// var name = 'P'

var player = {
x: 30,
spdX :50,
y: 40,
spdY: 10,
name: 'P',
}

//enemy specs
// var enemy_x = 130;
// var enemy_spdX = 30;
// var enemy_y = 80;
// var enemy_spdY = 20;
// var enemy_name = 'E'

var enemy = {
x: 130,
spdX :30,
y: 80,
spdY: 20,
name: 'E',
}


//canvas size
var HEIGHT = 400
var WIDTH = 700

var message = 'bouncing'

function update(){

       //player
        player.x += player.spdX;
        player.y += player.spdY;
        ctx.fillText(player.name,player.x,player.y);
        console.log('hello',player.x);

        if(player.x > WIDTH || player.x < 0){
        console.log(message);
        player.spdX = -player.spdX
        }
        if(player.y > HEIGHT || player.y < 0){
        console.log(message);
        player.spdY = -player.spdY
        }

        //enemy
        enemy.x += enemy.spdX;
        enemy.y += enemy.spdY;
        ctx.fillText(enemy.name,enemy.x,enemy.y);
        console.log('hello',enemy.x);

        if(enemy.x > WIDTH || enemy.x < 0){
        console.log(message);
        enemy.spdX = -enemy.spdX
        }
        if(enemy.y > HEIGHT || enemy.y < 0){
        console.log(message);
        enemy.spdY = -enemy.spdY
        }
}

setInterval(update,40);
