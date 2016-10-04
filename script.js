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

  img.char2 = new Image();
  img.char2.src = "images/char2.png";

  img.char3 = new Image();
  img.char3.src = "images/char3.png";

  img.bellsprout = new Image();
  img.bellsprout.src = "images/bell.png";

  img.weepin = new Image();
  img.weepin.src = "images/weepin.png";

  img.victree = new Image();
  img.victree.src = "images/victree.png";

  img.potion = new Image();
  img.potion.src = "images/potion.png";

  img.fire = new Image();
  img.fire.src = "images/fire.png";

  img.bluefire = new Image();
  img.bluefire.src = "images/bluefire.png";

  img.mega = new Image();
  img.mega.src = "images/mega-char.png";

  img.blast = new Image();
  img.blast.src = "images/blast.png";

  img.gay = new Image();
  img.gay.src = "images/gay.png";

  img.speed = new Image();
  img.speed.src = "images/speed.png";

  img.lap = new Image();
  img.lap.src = "images/lapras.png";

  img.mewtwo = new Image();
  img.mewtwo.src = "images/mewtwo.png";

  img.plasma = new Image();
  img.plasma.src = "images/plasma.png";


  var charmander = img.char1
  var charmeleon = img.char2
  var charizard = img.char3
  var bellsprout = img.bellsprout
  var weepin = img.weepin
  var victree = img.victree
  var potion = img.potion
  var fireball = img.fire
  var bluefire = img.bluefire
  var mega = img.mega
  var blast = img.blast
  var gay = img.gay
  var speed = img.speed
  var lap = img.lap
  var mewtwo = img.mewtwo
  var plasma = img.plasma

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
    lvl: 0,
    atkSpd: 0,
    mewtwo: 0,
};

//LIST
var enemyList = {};
var enemyList2 = {};
var enemyList3 = {};
var upgradeList = {};
var upgradeList2 = {};
var fireList = {};
var fireList2 = {};

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
        var enemy = {
   x:x,
   spdX:spdX,
   y:y,
   spdY:spdY,
   name:'E',
   id:id,
   width:40,
   height:40,
   color:'red',
   timer: 0,
   img:bellsprout
        };
        enemyList[id] = enemy;
  }

function enemy2 (id,x,y,spdX,spdY,width,height){
          var enemy = {
     x:x,
     spdX:spdX,
     y:y,
     spdY:spdY,
     name:'E',
     id:id,
     width:40,
     height:40,
     color:'red',
     img:weepin
          };
          enemyList[id] = enemy;
    }

function enemy3 (id,x,y,spdX,spdY,width,height){
            var enemy = {
       x:x,
       spdX:spdX,
       y:y,
       spdY:spdY,
       name:'E',
       id:id,
       width:60,
       height:60,
       color:'red',
       img:victree
            };
            enemyList[id] = enemy;
      }

function enemy4 (id,x,y,spdX,spdY,width,height){
              var enemy2 = {
         x:x,
         spdX:spdX,
         y:y,
         spdY:spdY,
         name:'E',
         id:id,
         width:80,
         height:80,
         color:'red',
         timer: 0,
         hp: 3,
         img:blast
              };
              enemyList2[id] = enemy2;
        }
function enemy5 (id,x,y,spdX,spdY,width,height){
                var enemy2 = {
           x:x,
           spdX:spdX,
           y:y,
           spdY:spdY,
           name:'E',
           id:id,
           width:80,
           height:80,
           color:'red',
           timer: 0,
           hp: 3,
           img:gay
                };
                enemyList2[id] = enemy2;
          }
function enemy6 (id,x,y,spdX,spdY,width,height){
                  var enemy3 = {
             x:x,
             spdX:spdX,
             y:y,
             spdY:spdY,
             name:'E',
             id:id,
             width:80,
             height:80,
             color:'red',
             timer: 0,
             hp: 3,
             img:lap
                  };
                  enemyList2[id] = enemy3;
            }

function enemy7(x,y,spdX,spdY,width,height){
        var enemy4 = {
        x:x,
        spdX:spdX,
        y:y,
        spdY:spdY,
        name:'E',
        id:3,
        width:80,
        height:80,
        color:'red',
        timer: 0,
        hp: 100,
        img:mewtwo
            };
      enemyList3[enemy4.id] = enemy4;
      return enemy4
      }

      // var mewtwoObject = enemy7
      // mewtwoObject = {};

//UPGRADE CONSTRUCTOR
function upgrade(id,x,y,width,height,spdX,spdY,color){
  var upgrade = {
    id: id,
    x: x,
    y: y,
    width:25,
    height:35,
    spdX: spdX,
    spdY: spdY,
    color: 'pink',
    img:potion
  }
  upgradeList[id] = upgrade
}

function atkSpd(id,x,y,width,height,spdX,spdY,color){
  var atkSpd = {
    id: id,
    x: x,
    y: y,
    width:40,
    height:50,
    spdX: spdX,
    spdY: spdY,
    color: 'pink',
    img:speed
  }
  upgradeList2[id] = atkSpd
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
    width:30,
    height:30,
    color:'orange',
    timer: 0,
    img:fireball,
      };
    fireList[id] = fire;
}

function plasmaFire (id,x,y,spdX,spdY,width,height){
 var plasma2 = {
    x:x,
    spdX:spdX,
    y:y,
    spdY:spdY,
    name:'E',
    id:id,
    width:30,
    height:30,
    color:'orange',
    timer: 0,
    img:plasma,
      };
    fireList2[id] = plasma2;
}

//FIRE CONSTRUCTOR
function blueFire (id,x,y,spdX,spdY,width,height){
 var blueFire = {
    x:x,
    spdX:spdX,
    y:y,
    spdY:spdY,
    name:'E',
    id:id,
    width:50,
    height:50,
    color:'blue',
    timer: 0,
    img:bluefire,
      };
    fireList[id] = blueFire;
}

//UPDATE OBJECT POSITION

function updatePosition(something){

   something.x += something.spdX;
   something.y += something.spdY;
  //  console.log('hello',something.x)

 }

 function updatePosition2(something) {

   something.x += something.spdX;
   something.y += something.spdY;

   if(something.x > 620 || something.x < 0){
    something.spdX = -something.spdX
  }

    if(something.y > 320 || something.y < 0){
     something.spdY = -something.spdY
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
  if (player.lvl >= 36 && player.lvl < 60) {
  ctx.drawImage(charizard,something.x,something.y,something.width,something.height);
  ctx.fillStyle = 'black';
  }
  if (player.lvl >= 60) {
  ctx.drawImage(mega,something.x,something.y,something.width,something.height);
  ctx.fillStyle = 'black';
  }
}

// function drawEnemy(something){
//   if (player.lvl < 5) {
//   ctx.drawImage(bellsprout,something.x,something.y,something.width,something.height);
//   // ctx.fillStyle = 'black';
// }
//   if (player.lvl >= 5 && player.lvl < 36) {
//   ctx.drawImage(weepin,something.x,something.y,something.width,something.height);
//   // ctx.fillStyle = 'black';
// }
//   if (player.lvl >= 36) {
//   ctx.drawImage(victree,something.x,something.y,something.width,something.height);
//   // ctx.fillStyle = 'black';
//   }
// }

function drawObject(something){
  // ctx.fillStyle = something.color;
  ctx.drawImage(something.img,something.x,something.y,something.width,something.height);
  // ctx.drawImage(potion,something.x,something.y,something.width,something.height);
  // ctx.fillRect(something.x,something.y,something.width,something.height);
}

function updateObject2(something){
  updatePosition2(something);
  drawObject(something);
}

function updateObject(something){
updatePosition(something);
drawObject(something);
// drawFire(something)
// drawUpgrade(something)
// drawPlayer(something);
// drawEnemy(something);
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

if(frameCount % 200 === 0) {
upgradeGenerator();
}

if(frameCount % 150 === 0) {
atkSpdGenerator();
}

if(frameCount % (30 - player.atkSpd) === 0) {
fireGenerator();
}

if(player.lvl >= 16) {
  if(frameCount % (30 - player.atkSpd) === 0) {
    fireGenerator2()
  }
}

if(player.lvl >= 36) {
  if(frameCount % (30 - player.atkSpd) === 0) {
    fireGenerator3()
    fireGenerator4()
  }
}

if(player.lvl >= 60) {
  if(frameCount % (30 - player.atkSpd) === 0) {
    fireGenerator5()
    fireGenerator6()
    fireGenerator7()
    fireGenerator8()
  }
}

if(player.lvl < 500 && frameCount % 5 === 0) {
enemyGenerator1();
score++
}

if(player.lvl < 500 && player.lvl >= 16) {
  if(frameCount % 5 === 0) {
    enemyGenerator2()
  }
}

if(player.lvl < 500 && player.lvl >= 36) {
  if(frameCount % 3 === 0) {
    enemyGenerator3()
  }
}
if(player.lvl < 500 && player.lvl >= 150) {
  if(frameCount % 60 === 0) {
   enemyGenerator4n5()
  }
}

if(player.lvl < 500 && player.lvl >= 250) {
  if(frameCount % 60 === 0) {
   enemyGenerator6n7()
  }
}

if(player.lvl < 500 && player.lvl >= 350) {
  if(frameCount % 10 === 0) {
   enemyGenerator8()
  }
}

if(player.lvl >= 500 && player.mewtwo == 0) {
   player.mewtwo ++
   enemyGenerator9()
}

if(player.lvl >= 500) {
  if(frameCount % 30 === 0) {
   mewFireGenerator()
  }
}

// if(player.lvl >= 501){
//   alert("You are a Pokemon Master!")
//   newGame();
// }



//loop through list and draw items

for(var key in fireList2){
  updateObject(fireList2[key]);
}

for(var key in fireList){
  updateObject(fireList[key]);

  var toRemove = false;
  fireList[key].timer++;
  if(fireList[key].timer > 40) {
  toRemove = true;
   }

    for(var key2 in enemyList){
      var isColliding = testCollision(fireList[key],enemyList[key2]);
      if(isColliding){
      toRemove = true;
      player.lvl += 100
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

for (var key in upgradeList2) {
  updateObject(upgradeList2[key]);

  var isColliding = testCollision(player, upgradeList2[key]);
  if(isColliding){
    //  console.log('Colliding!');
    player.atkSpd += 1

    if(player.atkSpd > 20)
    {
      player.atkSpd = 20
    }

    delete upgradeList2[key];
  }
}


for (var key in enemyList) {
  updateObject(enemyList[key]);

  //check for collision
  var isColliding = testCollision(player, enemyList[key]);
  if(isColliding){
    //  console.log('Colliding!');
    player.hp -= 2
    delete enemyList[key]

  if(player.hp<=0) {
    var timeSurvived = Date.now() - startTime;
    alert("You Lost! You died at level" + player.lvl);
    newGame();

      }
    }
 }

 for (var key in enemyList2) {
   updateObject(enemyList2[key]);

   //check for collision
   var isColliding = testCollision(player, enemyList2[key]);
   if(isColliding){
     //  console.log('Colliding!');
     player.hp -= 5
     delete enemyList2[key]

   if(player.hp<=0) {
     var timeSurvived = Date.now() - startTime;
     alert("You Lost! You died at level" + player.lvl);
     newGame();
          }
       }
    }

    for (var key in enemyList3) {
      updateObject2(enemyList3[key]);
  }

//update player and enemy appearance
// drawEnemy(enemy);
drawPlayer(player);
// drawUpgrade(upgrade);
// drawFire(fire);

ctx.fillText(player.hp + 'HP', 80, 32)
ctx.fillText("Level: " + player.lvl, 280, 32)
ctx.fillText("AtK Spd: " + player.atkSpd, 500, 32)
}

//END OF UPDATE//

//Create a new game whenever the game ends

function newGame(){
    player.hp = 100;
    startTime = Date.now();
    frameCount = 0;
    score = 0
    player.lvl = 0
    player.atkSpd = 0
    enemyList = {};
    enemyList2 = {};
    upgradeList = {};
    upgradeList2 = {};
    // enemyGenerator1();
    // enemyGenerator1();
    // enemyGenerator1();
}

//GENERATE STUFF

function enemyGenerator1() {
  var x = 0;
  var y = Math.random()* HEIGHT - 10;
  var width = 30;
  var height = 30;
  var id = Math.random();
  var spdX = 10;
  var spdY = 0;
  enemy(id,x,y,spdX,spdY,width,height);
}

function enemyGenerator2() {
  var x = Math.random()* WIDTH - 10;
  var y = 0;
  var width = 30;
  var height = 30;
  var id = Math.random();
  var spdX = 0;
  var spdY = 15;
  enemy2(id,x,y,spdX,spdY,width,height);
}

function enemyGenerator3() {
  var x = Math.random()*WIDTH;;
  var y = Math.random()*HEIGHT;;
  var width = width;
  var height = height;
  var id = Math.random();
  var spdX = 10;
  var spdY = 10;
  enemy3(id,x,y,spdX,spdY,width,height);
}

function enemyGenerator4() {
  var x = 0;
  var y = 240;;
  var width = width;
  var height = height;
  var id = Math.random();
  var spdX = 5;
  var spdY = 0;
  enemy4(id,x,y,spdX,spdY,width,height);
}

function enemyGenerator5() {
  var x = WIDTH - 10;
  var y = 120;;
  var width = width;
  var height = height;
  var id = Math.random();
  var spdX = -5;
  var spdY = 0;
  enemy4(id,x,y,spdX,spdY,width,height);
}

function enemyGenerator6() {
  var x = 200;
  var y = 380;;
  var width = width;
  var height = height;
  var id = Math.random();
  var spdX = 0;
  var spdY = -5;
  enemy5(id,x,y,spdX,spdY,width,height);
}

function enemyGenerator7() {
  var x = 400;
  var y = 0;;
  var width = width;
  var height = height;
  var id = Math.random();
  var spdX = 0;
  var spdY = 5;
  enemy5(id,x,y,spdX,spdY,width,height);
}

function enemyGenerator8() {
  var x = Math.random()*WIDTH;;
  var y = Math.random()*HEIGHT;;
  var width = width;
  var height = height;
  var id = Math.random();
  var spdX = 5;
  var spdY = 5;
  enemy6(id,x,y,spdX,spdY,width,height);
}

function enemyGenerator9() {
  var x = 300;
  var y = 130;
  var width = width;
  var height = height;
  var id = 3;
  var spdX = 5;
  var spdY = 5;
  var mewtwoObject = enemy7(x,y,spdX,spdY,width,height);
  return mewtwoObject;
  console.log(mewtwoObject)
}

function enemyGenerator4n5() {
enemyGenerator4()
enemyGenerator5()
}

function enemyGenerator6n7() {
enemyGenerator6()
enemyGenerator7()
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

function atkSpdGenerator() {
  var id = Math.random();
  var x = Math.random()* WIDTH;
  var y = Math.random()* HEIGHT;
  var width = 30;
  var height = 10;
  var spdX = 0;
  var spdY = 0;
  atkSpd(id,x,y,width,height,spdX,spdY);
}

function fireGenerator(){
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

function fireGenerator2(){
        //Math.random() returns a number between 0 and 1
    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = 0 //Math.cos(angle/180*Math.PI)*5;
    var spdY = -10 //Math.sin(angle/180*Math.PI)*5;
    fire(id,x,y,spdX,spdY,width,height);
}

function fireGenerator3(){

    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = 0 //Math.cos(angle/180*Math.PI)*5;
    var spdY = 10 //Math.sin(angle/180*Math.PI)*5;
    fire(id,x,y,spdX,spdY,width,height);
}

function fireGenerator4(){

    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = 10 //Math.cos(angle/180*Math.PI)*5;
    var spdY = 0 //Math.sin(angle/180*Math.PI)*5;
    fire(id,x,y,spdX,spdY,width,height);
}

function fireGenerator5(){

    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = 10 //Math.cos(angle/180*Math.PI)*5;
    var spdY = 10 //Math.sin(angle/180*Math.PI)*5;
    blueFire(id,x,y,spdX,spdY,width,height);
}

function fireGenerator6(){

    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = -10 //Math.cos(angle/180*Math.PI)*5;
    var spdY = -10 //Math.sin(angle/180*Math.PI)*5;
    blueFire(id,x,y,spdX,spdY,width,height);
}

function fireGenerator7(){

    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = -10 //Math.cos(angle/180*Math.PI)*5;
    var spdY = 10 //Math.sin(angle/180*Math.PI)*5;
    blueFire(id,x,y,spdX,spdY,width,height);
}

function fireGenerator8(){

    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = 10 //Math.cos(angle/180*Math.PI)*5;
    var spdY = -10 //Math.sin(angle/180*Math.PI)*5;
    blueFire(id,x,y,spdX,spdY,width,height);
}

function mewFireGenerator(){

  // var mewtwoObject = enemyGenerator9()
  // console.log(mewtwoObject)

    var x = 100;
    var y = 100;
    var height = height;
    var width = width;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = 10 //Math.cos(angle/180*Math.PI)*5;
    var spdY = -10 //Math.sin(angle/180*Math.PI)*5;
    plasmaFire(id,x,y,spdX,spdY,width,height);
}


newGame();

setInterval(update,40);

// console.log(enemyGenerator9)
