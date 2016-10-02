//canvas

var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '40px Arial';

//player specs
var player = {
x: 30,
spdX :50,
y: 40,
spdY: 10,
name: 'P',
}

//enemy specs

var enemyList = {};

var enemy = {
x: 130,
spdX :30,
y: 80,
spdY: 20,
name: 'E',
id: 'E1',
}

enemyList.E1 = enemy

var enemy2 = {
x: 230,
spdX :40,
y: 100,
spdY: 70,
name: 'E',
id: 'E2',
}

enemyList.E2 = enemy2

var enemy3 = {
x: 130,
spdX :10,
y: 140,
spdY: 40,
name: 'E',
id: 'E3',
}

enemyList.E3 = enemy2


//canvas size
var HEIGHT = 400
var WIDTH = 700

var message = 'bouncing'

// function updatePlayer(){
//   //player
//    player.x += player.spdX;
//    player.y += player.spdY;
//    ctx.fillText(player.name,player.x,player.y);
//    console.log('hello',player.x);
//
//    if(player.x > WIDTH || player.x < 0){
//    console.log(message);
//    player.spdX = -player.spdX
//    }
//    if(player.y > HEIGHT || player.y < 0){
//    console.log(message);
//    player.spdY = -player.spdY
//  }
// }

// function updateEnemy(){
//
//    //enemy
//    enemy.x += enemy.spdX;
//    enemy.y += enemy.spdY;
//    ctx.fillText(enemy.name,enemy.x,enemy.y);
//    console.log('hello',enemy.x)
//
//    if(enemy.x > WIDTH || enemy.x < 0){
//    console.log(message);
//    enemy.spdX = -enemy.spdX
//    }
//    if(enemy.y > HEIGHT || enemy.y < 0){
//    console.log(message);
//    enemy.spdY = -enemy.spdY
//   }
// }

function updateObject(something){

   //enemy
   something.x += something.spdX;
   something.y += something.spdY;
   ctx.fillText(something.name,something.x,something.y);
   console.log('hello',something.x)

   if(something.x > WIDTH || something.x < 0){
   console.log(message);
   something.spdX = -something.spdX
   }
   if(something.y > HEIGHT || something.y < 0){
   console.log(message);
   something.spdY = -something.spdY
  }
}

function update(){
ctx.clearRect(0,0,WIDTH,HEIGHT);

for (var key in enemyList) {
  updateObject(enemyList[key]);
}

updateObject(player);
}

update();

setInterval(update,100);
