//INSTRUCTIONS HOVER

$("#instruct").hover(
  function() {
    $("#play").show();
  }, function() {
    $("#play").hide();
  }
);

//CANVAS//

var ctx = document.getElementById("ctx").getContext("2d");

 ctx.font = '30px Helvetica';

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

//AUDIO LIST

var battle = document.getElementById("battle");

  function playBattle() {
  battle.play();
  }

  function pauseBattle() {
  battle.pause();
  battle.currentTime = 0;
  }

var battlemew = document.getElementById("battlemew");

 function playBattleMew() {
   battlemew.play();
}
  function pauseBattleMew() {
  battlemew.pause();
  battlemew.currentTime = 0;
}

var level = document.getElementById("level");

 function playLevel() {
 level.play();
 }

 function pauseLevel() {
 level.pause();
 level.currentTime = 0;
 }

var victory = document.getElementById("victory");

 function playVictory() {
  victory.play();
  }

   function pauseVictory() {
   victory.pause();
   victory.currentTime = 0;
  }


//COUNTERS//
var frameCount = 0;
var score = 0;
var startTime = Date.now();
var health = 100
var paused = false

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
var allList = {};
  var enemyList = {};
  var enemyList2 = {};
  var enemyList3 = {};
  var upgradeList = {};
  var upgradeList2 = {};
  var fireList = {};
  var fireList2 = {};

//TEST FOR COLLISION. OLD COLLISION FORMULAR INSIDE
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
         width:70,
         height:70,
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
           width:70,
           height:70,
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
             width:70,
             height:70,
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
        hp: 30,
        img:mewtwo
            };
      enemyList3[enemy4.id] = enemy4;
      return enemy4
      }

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

//DRAW OBJECTS
function drawPlayer(something){
  if (player.lvl < 20) {
  ctx.drawImage(charmander,something.x,something.y,something.width,something.height);
  ctx.fillStyle = 'black';
    }
   if (player.lvl >= 20 && player.lvl < 60) {
   ctx.drawImage(charmeleon,something.x,something.y,something.width,something.height);
   ctx.fillStyle = 'black';
    }
    if (player.lvl >= 60 && player.lvl < 120) {
     ctx.drawImage(charizard,something.x,something.y,something.width,something.height);
     ctx.fillStyle = 'black';
     }
      if (player.lvl >= 120) {
      ctx.drawImage(mega,something.x,something.y,something.width,something.height);
      ctx.fillStyle = 'black';
       }
     }

function drawObject(something){
  ctx.drawImage(something.img,something.x,something.y,something.width,something.height);
}

//ASSIGNING WHICH OBJECTS WILL INHERIT WHICH PHYSICS
function updateObject2(something){
  updatePosition2(something);
  drawObject(something);
}

function updateObject(something){
  updatePosition(something);
  drawObject(something);
}

//UPDATE OBJECT POSITION AKA THE PHYSICS

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

 // MOUSE MOVEMENT

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
//------------------------------------------------

function update(){

//PAUSE BUTTON
if(paused){
   ctx.fillStyle = 'red'
   ctx.fillText('PAUSED',340,200)
  return;
}

//EVOLUTION EFFECTS

function evolution() {
if(player.lvl == 20 || player.lvl == 60 || player.lvl == 120){
player.width = 80
player.height = 80
playLevel();
  }
}

function evolution2() {
if(player.lvl == 24 || player.lvl == 64 || player.lvl >= 127){
player.width = 50
player.height = 50
  }
}

evolution()
evolution2()


//CLEAR CANVAS TO AVOID DUPLICATES
ctx.clearRect(0,0,WIDTH,HEIGHT);

//ADD FRAME COUNT FOR MODULARS TO WORK
frameCount++

//GENERATE UPGRADES

if(frameCount % 150 === 0) {
 upgradeGenerator();
 }

if(frameCount % 180 === 0) {
 atkSpdGenerator();
 }

//GENERATE PLAYER ATTACKS

if((frameCount) % (30 - player.atkSpd) === 0) {
 fireGenerator();
 }

if(player.lvl >= 20) {
  if(frameCount % (30 - player.atkSpd) === 0) {
    fireGenerator2()
  }
}

if(player.lvl >= 60) {
  if(frameCount % (30 - player.atkSpd) === 0) {
    fireGenerator3()
    fireGenerator4()
  }
}

if(player.lvl >= 120) {
  if(frameCount % (30 - player.atkSpd) === 0) {
    fireGenerator5()
    fireGenerator6()
    fireGenerator7()
    fireGenerator8()
  }
}

//GENERATE GRASS ENEMIES

if(player.lvl < 500 && frameCount % 5 === 0) {
 enemyGenerator1();
 score++
}

if(player.lvl < 500 && player.lvl >= 20) {
  if(frameCount % 5 === 0) {
    enemyGenerator2()
  }
}

if(player.lvl < 500 && player.lvl >= 60) {
  if(frameCount % 3 === 0) {
    enemyGenerator3()
  }
}

//GENERATE WATER ENEMIES

if(player.lvl < 500 && player.lvl >= 150) {
  if(frameCount % 60 === 0) {
   enemyGenerator4()
   enemyGenerator5()
  }
}

if(player.lvl < 500 && player.lvl >= 250) {
  if(frameCount % 60 === 0) {
   enemyGenerator6()
   enemyGenerator7()
  }
}

if(player.lvl < 500 && player.lvl >= 350) {
  if(frameCount % 10 === 0) {
   enemyGenerator8()
  }
}

//GENERATE MEWTWO AND HIS PLASMA BALLS

if(player.lvl >= 500 && player.mewtwo == 0) {
   alert("Congrats on reaching level 500! We'll be healing you back to full health and prepare for the final BOSS!")
   pauseBattle();
   playBattleMew();
   player.hp = 100
   player.mewtwo ++
   enemyGenerator9()
}

if(player.lvl >= 500) {
  if(frameCount % 50 === 0) {
   mewFireGenerator()
   mewFireGenerator2()
  }
}

//LOOP THROUGH LIST, DRAW THEM OUT, AND ASSIGN COLLISION LOGIC TO THEM

//LOGIC OF NORMAL FIRE HITTING ENEMIES
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
      player.lvl += 1
      delete enemyList[key2];
            }
         }
        if(toRemove){
        delete fireList[key];
      }
    }

//LOGIC OF FIGHTING WITH MEWTWO
for(var key in enemyList3){
    updateObject2(enemyList3[key]);

    for(var key2 in fireList){
      var isColliding = testCollision(fireList[key2],enemyList3[key]);
      if(isColliding){
      delete fireList[key2];
      // toRemove = true;
      health -= (Math.floor(Math.random() * 3))
      if (health <= 0){
       delete enemyList3[key]
       pauseBattleMew();
       playVictory();
      //  alert("Congrats! You defeated Mewtwo. You are truly a Pokemon Master!")
      //  newGame();
       }
     }
    }
    // for(var key2 in fireList){
      var isColliding = testCollision(player,enemyList3[key]);
      if(isColliding){
      player.hp -= 5

      if(player.hp<=0) {
        var timeSurvived = Date.now() - startTime;
        alert("You Lost! You died at level " + player.lvl);
        newGame();
  }
 }
}

//LOGIC TO POTION
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

//LOGIC TO ATTACK BOOST
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

//LOGIC TO GRASS ENEMY LIST
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
    alert("You Lost! You died at level " + player.lvl);
    newGame();

      }
    }
 }

//LOGIC TO WATER ENEMY LIST
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
     alert("You Lost! You died at level " + player.lvl);
     newGame();
      }
    }
  }

//LOGIC TO PLASMA BALL
for (var key in fireList2) {
    updateObject2(fireList2[key])

    var isColliding = testCollision(player, fireList2[key]);
    if(isColliding){
      //  console.log('Colliding!');
      {
        player.hp -= 2
      }

      //OFFSET COLLISION DAMAGE
      if(health <= 0){
      player.hp += 2
      }


    if(player.hp<=0) {
      var timeSurvived = Date.now() - startTime;
      alert("You died fighting with Mewtwo at level " + player.lvl + ". Try again!");
      newGame();

         }
      }
}

//DRAW PLAYER
drawPlayer(player);

//FILL TEXT IN CANVAS
ctx.textAlign= "center"
ctx.fillText(player.hp + 'HP', 120, 32)
ctx.fillText("Level: " + player.lvl, 320, 32)
ctx.fillText("AtK Spd: " + player.atkSpd, 540, 32)

if (player.lvl >= 500){
 ctx.fillStyle = 'red';
 ctx.fillText('Mewtwo HP:' + health, 320, 60)
 }

 if(health <= 0){
  ctx.fillStyle = 'gold'
  ctx.fillText('Congrats on beating Mewtwo!', 350, 150)
  ctx.fillText('Your next adventure is waiting for you.', 350, 210)
  ctx.fillText('Press R to restart the game', 350, 270)
   }

 }


//END OF UPDATE FUNCTION//
// ----------------------------------------

//CREATING A NEWGAME WHEN GAME ENDS

function newGame(){
    player.hp = 100;
    startTime = Date.now();
    frameCount = 0;
    score = 0;
    player.lvl = 0;
    player.atkSpd = 0;
    player.mewtwo = 0
    enemyList = {};
    enemyList2 = {};
    enemyList3 = {};
    fireList = {};
    fireList2 = {};
    upgradeList = {};
    upgradeList2 = {};
    health = 100
    pauseVictory();
    pauseBattleMew();
    playBattle();
}

//GENERATE ENEMY

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

  enemy7(x,y,spdX,spdY,width,height);
}

//GENERATE UPGRADES

function upgradeGenerator() {
  var id = Math.random();
  var x = Math.random()* WIDTH - 20;
  var y = Math.random()* HEIGHT - 20;
  var width = 10;
  var height = 10;
  var spdX = 0;
  var spdY = 0;
  upgrade(id,x,y,width,height,spdX,spdY);
}

function atkSpdGenerator() {
  var id = Math.random();
  var x = Math.random()* WIDTH - 20;
  var y = Math.random()* HEIGHT - 20;
  var width = 30;
  var height = 10;
  var spdX = 0;
  var spdY = 0;
  atkSpd(id,x,y,width,height,spdX,spdY);
}

//GENERATE FIRE FROM PLAYER

function fireGenerator(){
    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();
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

//GENERATE FIRE FOR MEWTWO

function mewFireGenerator(){

    var x = Math.random() * WIDTH;
    var y = Math.random() * HEIGHT;

    var height = height;
    var width = width;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = 5 //Math.cos(angle/180*Math.PI)*5;
    var spdY = -5 //Math.sin(angle/180*Math.PI)*5;
    plasmaFire(id,x,y,spdX,spdY,width,height);
}

function mewFireGenerator2(){

    var x = Math.random() * WIDTH;
    var y = Math.random() * HEIGHT;

    var height = height;
    var width = width;
    var id = Math.random();

    var angle = Math.random()*360;
    var spdX = -5 //Math.cos(angle/180*Math.PI)*5;
    var spdY = 5 //Math.sin(angle/180*Math.PI)*5;
    plasmaFire(id,x,y,spdX,spdY,width,height);
}

// START AND PAUSE BUTTON

var start = 0

var playBox = document.getElementById('play');



document.onkeydown = function(event){
  if(event.keyCode === 83 && start === 0){
  setInterval(update,50)
  // update();
  playBattle();
  playBox.style.display = 'none';
  start++;
  }
  else if(event.keyCode === 80){
  paused = !paused
  }
  if(event.keyCode === 82){
  newGame();
 }
}
