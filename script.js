//CANVAS//

var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '30px Helvetica';

//CANVAS SIZE//
var HEIGHT = 400
var WIDTH = 700

//IMAGE LIST//
var img = {};
  img.char1 = new Image();
  img.char1.src = "images/char1.png";

  img.bellsprout = new Image();
  img.bellsprout.src = "images/bell.png";

  img.potion = new Image();
  img.potion.src = "images/potion.png";

  img.fire = new Image();
  img.fire.src = "images/fire.png";

  img.char2 = new Image();
  img.char2.src = "images/char2.png";

  img.char3 = new Image();
  img.char3.src = "images/char3.png";

  var charmander = img.char1
  var charmeleon = img.char2
  var charizard = img.char3
  var bellsprout = img.bellsprout
  var potion = img.potion
  var fireball = img.fire

//COUNTERS//
var frameCount = 0;
var score = 0;
var startTime = Date.now();

//PLAYER SPECS//
var player = {
    x:50,
    spdX:120,
    y:40,
    spdY:50,
    name:'P',
    hp: 100,
    width: 50,
    height: 50,
    color: 'green',
    img:charmander,
    lvl: 0
};

//LIST
var enemyList = {};
var upgradeList = {};
var fireList = {};

//test for collision
// function getDistance(object1,object2){     //return distance (number)
//         var vx = object1.x - object2.x;
//         var vy = object1.y - object2.y;
//         return Math.sqrt(vx*vx+vy*vy);
// }
//
// function testCollision(object1,object2){  //return if colliding (true/false)
//         var distance = getDistance(object1,object2);
//         return distance < 30;
// }

// getDistance = function (object1,object2){  //return distance (number)
//         var vx = object1.x - object2.x;
//         var vy = object1.y - object2.y;
//         return Math.sqrt(vx*vx+vy*vy);
// }

testCollisionRectRect = function(rect1,rect2){
  return rect1.x <= rect2.x+rect2.width
  && rect2.x <= rect1.x+rect1.width
  && rect1.y <= rect2.y + rect2.height
  && rect2.y <= rect1.y + rect1.height;
}

function testCollision (object1,object2){
        var rect1 = {
                x:object1.x-object1.width/2,
                y:object1.y-object1.height/2,
                width:object1.width,
                height:object1.height,
        }
        var rect2 = {
                x:object2.x-object2.width/2,
                y:object2.y-object2.height/2,
                width:object2.width,
                height:object2.height,
        }
        return testCollisionRectRect(rect1,rect2);
}


// function testCollision (object1,object2){       //return if colliding (true/false)
//         var object1 = {
//                 x:object1.x-object1.width/2,
//                 y:object1.y-object1.height/2,
//                 width:object1.width,
//                 height:object1.height,
//         }
//         var object2 = {
//                 x:object2.x-object2.width/2,
//                 y:object2.y-object2.height/2,
//                 width:object2.width,
//                 height:object2.height,
//      }
//      return testCollision(object1,object2);
//   }

//ENEMY CONSTRUCTOR
function enemy (id,x,y,spdX,spdY,width,height){
        var enemy3 = {
   x:x,
   spdX:spdX,
   y:y,
   spdY:spdY,
   name:'E',
   id:id,
   width:40,
   height:40,
   color:'red',
   img:bellsprout
        };
        enemyList[id] = enemy3;
  }

//UPGRADE CONSTRUCTOR
function upgrade(id,x,y,width,height,spdX,spdY,color){
  var upgrade = {
    id: id,
    x: x,
    y: y,
    width:20,
    height:30,
    spdX: spdX,
    spdY: spdY,
    color: 'pink',
    img:potion
  }
  upgradeList[id] = upgrade
}

//FIRE CONSTRUCTOR
function fire (id,x,y,spdX,spdY,width,height){
 var fire = {
    x:x,
    spdX:spdX,
    y:y,
    spdY:spdY,
    name:'E',
    id:id,
    width:20,
    height:20,
    color:'orange',
    timer: 0,
    img:fireball,
      };
    fireList[id] = fire;
}

//UPDATE OBJECT POSITION

function updatePosition(something){

   something.x += something.spdX;
   something.y += something.spdY;
  //  console.log('hello',something.x)

   if(something.x > 670 || something.x < 0){
   something.spdX = -something.spdX
   //  console.log(message);
   }
 }

//DRAW OBJECT

function drawPlayer(something){
  if (player.lvl < 16) {
  ctx.drawImage(charmander,something.x,something.y,something.width,something.height);
  ctx.fillStyle = 'black';
}
  if (player.lvl >= 16 && player.lvl < 36) {
  ctx.drawImage(charmeleon,something.x,something.y,something.width,something.height);
  ctx.fillStyle = 'black';
}
  if (player.lvl >= 36) {
  ctx.drawImage(charizard,something.x,something.y,something.width,something.height);
  ctx.fillStyle = 'black';
  }
}

function drawObject(something){
  ctx.fillStyle = something.color;
  ctx.drawImage(something.img,something.x,something.y,something.width,something.height);
  // ctx.fillRect(something.x,something.y,something.width,something.height);
}


function updateObject(something){
updatePosition(something);
drawObject(something);
// drawPlayer(something);
// drawEnemy(something);
// drawUpgrade(upgrade)
}

document.onmousemove = function(mouse){
  var mouseX = mouse.clientX-310;
  var mouseY = mouse.clientY-195;

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

//UPDATE TO RUN EVERYTHING

function update(){

//clear canvas
ctx.clearRect(0,0,WIDTH,HEIGHT);

//add frameCount
frameCount++

//generate stuff
if(frameCount % 10 === 0) {
randomGenerator1();
score++
}

if(frameCount % 200 === 0) {
upgradeGenerator();
}

if(frameCount % 40 === 0) {
fireGenerator();
}

//loop through list and draw items

for(var key in fireList){
  updateObject(fireList[key]);

  var toRemove = false;
  fireList[key].timer++;
  if(fireList[key].timer > 20) {
  toRemove = true;
   }

    for(var key2 in enemyList){
      var isColliding = testCollision(fireList[key],enemyList[key2]);
      if(isColliding){
      toRemove = true;
      player.lvl ++
      delete enemyList[key2];
            }
         }
        if(toRemove){
        delete fireList[key];
         }
    }


for (var key in upgradeList) {
  updateObject(upgradeList[key]);

  var isColliding = testCollision(player, upgradeList[key]);
  if(isColliding){
    //  console.log('Colliding!');
    player.hp += 20

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
    player.hp -= 3
    delete enemyList[key]

  if(player.hp<=0) {
    var timeSurvived = Date.now() - startTime;
    alert("You Lost! You died at level" + player.lvl);
    newGame();
      }
    }
 }



//connected to player
drawPlayer(player);
ctx.fillText(player.hp + 'HP', 150, 32)
ctx.fillText("Level" + player.lvl, 420, 32)
}

//END OF UPDATE//

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

//GENERATE STUFF

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

function fireGenerator(){
        //Math.random() returns a number between 0 and 1
    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = -10 //Math.cos(angle/180*Math.PI)*5;
    var spdY = 0 //Math.sin(angle/180*Math.PI)*5;
    fire(id,x,y,spdX,spdY,width,height);
}

newGame();

setInterval(update,40);
