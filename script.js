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

function enemy(id,x,y,spdX,spdY){
  // var id = 'E3'
  var enemy = {
    x: x,
    spdX :spdX,
    y: y,
    spdY: spdY,
    name: 'E',
    id: id,
  }
  enemyList[id] = enemy
}

enemy('E1',130,80,30,20)
enemy('E2',230,100,40,70)
enemy('E3',400,300,-50,-20)


//canvas size
var HEIGHT = 400
var WIDTH = 700

var message = 'bouncing'

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
