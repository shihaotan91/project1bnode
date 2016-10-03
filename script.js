//canvas

var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '30px Helvetica';

//canvas size
var HEIGHT = 400
var WIDTH = 700

//counters
var frameCount = 0;
var score = 0;
var startTime = Date.now();

//player specs
var player = {
        x:50,
        spdX:120,
        y:40,
        spdY:50,
        name:'P',
        hp: 100,
        width: 20,
        height: 20,
        color: 'green'
};

//list
var enemyList = {};
var upgradeList = {};
var bulletList = {};

//test for collision
function getDistance(object1,object2){     //return distance (number)
        var vx = object1.x - object2.x;
        var vy = object1.y - object2.y;
        return Math.sqrt(vx*vx+vy*vy);
}

function testCollision(object1,object2){  //return if colliding (true/false)
        var distance = getDistance(object1,object2);
        return distance < 30;
}

//enemy constructor
function enemy (id,x,y,spdX,spdY,width,height){
        var enemy3 = {
   x:x,
   spdX:spdX,
   y:y,
   spdY:spdY,
   name:'E',
   id:id,
   width:width,
   height:height,
   color:'red',
        };
        enemyList[id] = enemy3;
  }

//upgrade constructor
function upgrade(id,x,y,width,height,spdX,spdY,color){
  var upgrade = {
    id: id,
    x: x,
    y: y,
    width: width,
    height: height,
    spdX: spdX,
    spdY: spdY,
    color: 'orange',
  }
  upgradeList[id] = upgrade
}

function bullet(id,x,y,width,height,spdX,spdY,color){
  var bullet = {
    id: id,
    x: player.x,
    y: player.y,
    width: 10,
    height: 10,
    spdX: 0,
    spdY: 0,
    color: 'black',
  }
  bulletList[id] = bullet
}

//update object position

function updatePosition(something){

   something.x += something.spdX;
   something.y += something.spdY;
  //  console.log('hello',something.x)

   if(something.x > 670 || something.x < 0){
   something.spdX = -something.spdX
   //  console.log(message);
   }
  //  if(something.y > 380 || something.y < 0){
  //  something.spdY = -something.spdY
  //  //  console.log(message);
  // }
}

// testCollisionRectRect = function(rect1,rect2){
//         return rect1.x <= rect2.x+rect2.width
//                 && rect2.x <= rect1.x+rect1.width
//                 && rect1.y <= rect2.y + rect2.height
//                 && rect2.y <= rect1.y + rect1.height;
// }

//draw object position

function drawPlayer(something){
  ctx.fillStyle = something.color;
  ctx.fillRect(something.x,something.y,something.width,something.height);
  ctx.fillStyle = 'black';
}

function drawObject(something){
  ctx.fillStyle = something.color;
  ctx.fillRect(something.x,something.y,something.width,something.height);
}

// function drawEnemy(something){
//   ctx.fillStyle = something.color;
//   ctx.fillRect(something.x,something.y,something.width,something.height);
// }

function updateObject(something){
updatePosition(something);
drawPlayer(something)
drawObject(something)
// drawEnemy(something);
// drawUpgrade(upgrade)
}

document.onmousemove = function(mouse){
  var mouseX = mouse.clientX-300;
  var mouseY = mouse.clientY-180;

  if(mouseX < player.width/2)
                mouseX = player.width/2 - 10;
        if(mouseX > WIDTH-player.width/2)
                mouseX = WIDTH - player.width/2 - 10;
        if(mouseY < player.height/2)
                mouseY = player.height/2 - 10;
        if(mouseY > HEIGHT - player.height/2)
                mouseY = HEIGHT - player.height/2 - 10;

  player.x = mouseX;
  player.y = mouseY;


}

//final update to run everything

function update(){

//clear canvas
ctx.clearRect(0,0,WIDTH,HEIGHT);

//add frameCount
frameCount++

//generate stuff
if(frameCount % 40 === 0) {
randomGenerator1();
score++
}

if(frameCount % 200 === 0) {
upgradeGenerator();
}

//loop through list and draw items
for (var key in upgradeList) {
  updateObject(upgradeList[key]);

  var isColliding = testCollision(player, upgradeList[key]);
  if(isColliding){
    //  console.log('Colliding!');
    player.hp += 10

    if(player.hp > 100)
    {
      player.hp = 100
    }

    delete upgradeList[key];
  }
}

for (var key in enemyList) {
  updateObject(enemyList[key]);

  //check for collision
  var isColliding = testCollision(player, enemyList[key]);
  if(isColliding){
    //  console.log('Colliding!');
    player.hp -= 1

  if(player.hp<=0) {
    var timeSurvived = Date.now() - startTime;
    // alert("You Lost! You survived" + timeSurvived + "ms");
    newGame();
      }
    }
 }

drawPlayer(player);
ctx.fillText(player.hp + 'HP', 150, 32)
ctx.fillText("Score:" + score, 420, 32)
}

//Create a new game whenever the game ends

function newGame(){
    player.hp = 100;
    startTime = Date.now();
    frameCount = 0;
    score = 0
    enemyList = {};
    upgradeList = {};
    randomGenerator1();
    randomGenerator1();
    randomGenerator1();
}

//Randomly generate an enemy

function randomGenerator1() {
  var x = 0;
  var y = Math.random()* HEIGHT - 10;
  var width = 30;
  var height = 30;
  var id = Math.random();
  var spdX = 10;
  var spdY = 0;
  enemy(id,x,y,spdX,spdY,width,height);
}

// randomlyGenerateEnemy = function(){
//         //Math.random() returns a number between 0 and 1
//         var x = Math.random()*WIDTH;
//         var y = Math.random()*HEIGHT;
//         var height = 10 + Math.random()*30;     //between 10 and 40
//         var width = 10 + Math.random()*30;
//         var id = Math.random();
//         var spdX = 5 + Math.random() * 5;
//         var spdY = 5 + Math.random() * 5;
//         Enemy(id,x,y,spdX,spdY,width,height);
//
// }

function upgradeGenerator() {
  var id = Math.random();
  var x = Math.random()* WIDTH;
  var y = Math.random()* HEIGHT;
  var width = 10;
  var height = 10;
  var spdX = 0;
  var spdY = 0;
  upgrade(id,x,y,width,height,spdX,spdY);
}

newGame();

setInterval(update,40);
