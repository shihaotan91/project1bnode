//canvas

var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '40px Arial';

//canvas size
var HEIGHT = 400
var WIDTH = 700

var message = 'bouncing'

//player specs
var player = {
        x:50,
        spdX:120,
        y:40,
        spdY:50,
        name:'P',
};

//enemy specs

var enemyList = {};

enemy('E1',5,80,30,0)
enemy('E2',5,300,40,0)
enemy('E3',495,200,-50,0)

function getDistance(object1,object2){     //return distance (number)
        var vx = object1.x - object2.x;
        var vy = object1.y - object2.y;
        return Math.sqrt(vx*vx+vy*vy);
}

function testCollision(object1,object2){  //return if colliding (true/false)
        var distance = getDistance(object1,object2);
        return distance < 30;
}

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

function updateObject(something){

   //enemy
   something.x += something.spdX;
   something.y += something.spdY;
   ctx.fillText(something.name,something.x,something.y);
  //  console.log('hello',something.x)

   if(something.x > WIDTH || something.x < 0){
  //  console.log(message);
   something.spdX = -something.spdX
   }
   if(something.y > HEIGHT || something.y < 0){
  //  console.log(message);
   something.spdY = -something.spdY
  }
}

function update(){
ctx.clearRect(0,0,WIDTH,HEIGHT);

for (var key in enemyList) {
  updateObject(enemyList[key]);

  var isColliding = testCollision(player, enemyList[key]);
  if(isColliding){
     console.log('Colliding!');
   }
}

updateObject(player);

}

setInterval(update,100);
