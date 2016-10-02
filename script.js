//canvas

var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '40px Arial';

//canvas size
var HEIGHT = 400
var WIDTH = 700
var startTime = Date.now();

var message = 'bouncing'

//player specs
var player = {
        x:50,
        spdX:120,
        y:40,
        spdY:50,
        name:'P',
        hp: 10,
};

//enemy specs
var enemyList = {};

enemy('E1',5,80,10,0)
enemy('E2',5,300,10,0)
enemy('E3',495,200,-10,0)

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
function enemy(id,x,y,spdX,spdY){
  var enemy3 = {
    x: x,
    spdX :spdX,
    y: y,
    spdY: spdY,
    name: 'E',
    id: id,
  }
  enemyList[id] = enemy3
}

//draw and update object position

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

function drawPlayer(something){
  ctx.fillStyle = 'green';
  ctx.fillRect(something.x,something.y,20,20);
  ctx.fillStyle = 'black';
}

function drawEnemy(something){
  ctx.fillStyle = 'red';
  ctx.fillRect(something.x,something.y,30,30);
}

function updateObject(something){
updatePosition(something);
drawPlayer(something)
drawEnemy(something);
}

document.onmousemove = function(mouse){
  var mouseX = mouse.clientX;
  var mouseY = mouse.clientY;

  player.x = mouseX;
  player.y = mouseY;
}

//final update to run everything

function update(){
ctx.clearRect(0,0,WIDTH,HEIGHT);

for (var key in enemyList) {
  updateObject(enemyList[key]);

  var isColliding = testCollision(player, enemyList[key]);
  if(isColliding){
    //  console.log('Colliding!');
    player.hp -= 1

  if(player.hp<=0) {
    var timeSurvived = Date.now() - startTime;
    console.log("You Lost! You survived" + timeSurvived + "ms");
    startTime = Date.now();
    player.hp = 10
  }

   }
}

drawPlayer(player);
ctx.fillText(player.hp + 'HP', 300, 36)
}

setInterval(update,100);
