// INSTRUCTIONS HOVER

$('#instruct').hover(
  function () {
    $('#play').show()
  }, function () {
    $('#play').hide()
  }
)

// CANVAS//

var ctx = document.getElementById('ctx').getContext('2d')

ctx.font = '30px Helvetica'

var HEIGHT = 400
var WIDTH = 700

// IMAGE LIST//
var img = {}
img.char1 = new Image()
img.char1.src = 'images/char1.png'

img.char2 = new Image()
img.char2.src = 'images/char2.png'

img.char3 = new Image()
img.char3.src = 'images/char3.png'

img.bellsprout = new Image()
img.bellsprout.src = 'images/bell.png'

img.weepin = new Image()
img.weepin.src = 'images/weepin.png'

img.victree = new Image()
img.victree.src = 'images/victree.png'

img.potion = new Image()
img.potion.src = 'images/potion.png'

img.fire = new Image()
img.fire.src = 'images/fire.png'

img.bluefire = new Image()
img.bluefire.src = 'images/bluefire.png'

img.mega = new Image()
img.mega.src = 'images/mega-char.png'

img.blast = new Image()
img.blast.src = 'images/blast.png'

img.gay = new Image()
img.gay.src = 'images/gay.png'

img.speed = new Image()
img.speed.src = 'images/speed.png'

img.lap = new Image()
img.lap.src = 'images/lapras.png'

img.mewtwo = new Image()
img.mewtwo.src = 'images/mewtwo.png'

img.plasma = new Image()
img.plasma.src = 'images/plasma.png'

img.sad = new Image()
img.sad.src = 'images/sad.png'

img.crown = new Image()
img.crown.src = 'images/crown.png'

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
var sad = img.sad
var crown = img.crown

// AUDIO LIST

var battle = document.getElementById('battle')

function playBattle () {
  battle.play()
}

function pauseBattle () {
  battle.pause()
  battle.currentTime = 0
}

function pauseBattle1 () {
  battle.pause()
}

var battlemew = document.getElementById('battlemew')

function playBattleMew () {
  battlemew.play()
}
function pauseBattleMew () {
  battlemew.pause()
  battlemew.currentTime = 0
}

function pauseBattleMew1 () {
  battlemew.pause()
}

var level = document.getElementById('level')

function playLevel () {
  level.play()
}

// function pauseLevel () {
//   level.pause()
//   level.currentTime = 0
// }

var victory = document.getElementById('victory')

function playVictory () {
  victory.play()
}

function pauseVictory () {
  victory.pause()
  victory.currentTime = 0
}

var ghost = document.getElementById('ghost')

function playGhost () {
  ghost.play()
}

function pauseGhost () {
  ghost.pause()
  ghost.currentTime = 0
}

// COUNTERS//
var frameCount = 0
var score = 0
var startTime = Date.now()
var health = 100
var paused = false
var waterCount = 0
var psyCount = 0

// PLAYER SPECS//
var player = {
  x: 50,
  y: 40,
  hp: 100,
  width: 50,
  height: 50,
  img: charmander,
  lvl: 0,
  atkSpd: 0,
  mewtwo: 0
}

// LIST
var allList = {}
var enemyList = {}
var enemyList2 = {}
var enemyList3 = {}
var upgradeList = {}
var upgradeList2 = {}
var fireList = {}
var fireList2 = {}

// TEST FOR COLLISION. OLD COLLISION FORMULAR INSIDE
// function getDistance(object1,object2){     //return distance (number)
//         var vx = object1.x - object2.x
//         var vy = object1.y - object2.y
//         return Math.sqrt(vx*vx+vy*vy)
// }
//
// function testCollision(object1,object2){  //return if colliding (true/false)
//         var distance = getDistance(object1,object2)
//         return distance < 30
// }
testCollisionRectRect = function (rect1, rect2) {
  return rect1.x <= rect2.x + rect2.width
    && rect2.x <= rect1.x + rect1.width
    && rect1.y <= rect2.y + rect2.height
    && rect2.y <= rect1.y + rect1.height
}

function testCollision (object1, object2) {
  var rect1 = {
    x: object1.x - object1.width / 2,
    y: object1.y - object1.height / 2,
    width: object1.width,
    height: object1.height
  }
  var rect2 = {
    x: object2.x - object2.width / 2,
    y: object2.y - object2.height / 2,
    width: object2.width,
    height: object2.height
  }
  return testCollisionRectRect(rect1, rect2)
}

// ENEMY CONSTRUCTOR

function enemy (id, x, y, spdX, spdY, width, height) {
  var enemy = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 40,
    height: 40,
    img: bellsprout
  }
  enemyList[id] = enemy
}

function enemy2 (id, x, y, spdX, spdY, width, height) {
  var enemy = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    width: 40,
    height: 40,
    img: weepin
  }
  enemyList[id] = enemy
}

function enemy3 (id, x, y, spdX, spdY, width, height) {
  var enemy = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 60,
    height: 60,
    img: victree
  }
  enemyList[id] = enemy
}

function enemy4 (id, x, y, spdX, spdY, width, height) {
  var enemy2 = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 70,
    height: 70,
    img: blast
  }
  enemyList2[id] = enemy2
}

function enemy5 (id, x, y, spdX, spdY, width, height) {
  var enemy2 = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 70,
    height: 70,
    color: 'red',
    img: gay
  }
  enemyList2[id] = enemy2
}

function enemy6 (id, x, y, spdX, spdY, width, height) {
  var enemy3 = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 70,
    height: 70,
    img: lap
  }
  enemyList2[id] = enemy3
}

function enemy7 (id, x, y, spdX, spdY, width, height) {
  var enemy4 = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 80,
    height: 80,
    img: mewtwo
  }
  enemyList3[id] = enemy4
}

// UPGRADE CONSTRUCTOR
function upgrade (id, x, y, spdX, spdY) {
  var upgrade = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 30,
    height: 40,
    img: potion
  }
  upgradeList[id] = upgrade
}

function atkSpd (id, x, y, spdX, spdY) {
  var atkSpd = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 40,
    height: 50,
    img: speed
  }
  upgradeList2[id] = atkSpd
}

// FIRE CONSTRUCTOR
function fire (id, x, y, spdX, spdY, width, height) {
  var fire = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 30,
    height: 30,
    timer: 0,
    img: fireball
  }
  fireList[id] = fire
}

function plasmaFire (id, x, y, spdX, spdY, width, height) {
  var plasma2 = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 30,
    height: 30,
    img: plasma
  }
  fireList2[id] = plasma2
}

function blueFire (id, x, y, spdX, spdY, width, height) {
  var blueFire = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: 50,
    height: 50,
    img: bluefire
  }
  fireList[id] = blueFire
}

// ------------------------------------------------------------------

// DRAW OBJECTS
function drawPlayer (something) {
  if (player.hp > 0 && player.lvl < 20) {
    ctx.drawImage(charmander, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp > 0 && player.lvl >= 20 && player.lvl < 60) {
    ctx.drawImage(charmeleon, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp > 0 && player.lvl >= 60 && player.lvl < 120) {
    ctx.drawImage(charizard, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp > 0 && player.lvl >= 120 && health > 0) {
    ctx.drawImage(mega, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp <= 0) {
    ctx.drawImage(sad, something.x, something.y, 90, 90)
    ctx.fillStyle = 'black'
  }
  if (health <= 0)
    ctx.drawImage(crown, something.x, something.y, 100, 100)
  ctx.fillStyle = 'black'
}

function drawObject (something) {
  ctx.drawImage(something.img, something.x, something.y, something.width, something.height)
}

// ASSIGNING WHICH OBJECTS WILL INHERIT WHICH PHYSICS
function updateObject2 (something) {
  updatePosition2(something)
  drawObject(something)
}

function updateObject (something) {
  updatePosition(something)
  drawObject(something)
}

// UPDATE OBJECT POSITION AKA THE PHYSICS

function updatePosition (something) {
  something.x += something.spdX
  something.y += something.spdY
//  console.log('hello',something.x)
}

function updatePosition2 (something) {
  something.x += something.spdX
  something.y += something.spdY

  if (something.x > 620 || something.x < 0) {
    something.spdX = -something.spdX
  }

  if (something.y > 320 || something.y < 0) {
    something.spdY = -something.spdY
  }
}

// MOUSE MOVEMENT

document.onmousemove = function (mouse) {
  var mouseX = mouse.clientX - 310
  var mouseY = mouse.clientY - 195

  if (mouseX < player.width / 2)
    mouseX = player.width / 2 - 10
  if (mouseX > WIDTH - player.width / 2)
    mouseX = WIDTH - player.width / 2 - 10
  if (mouseY < player.height / 2)
    mouseY = player.height / 2 - 10
  if (mouseY > HEIGHT - player.height / 2)
    mouseY = HEIGHT - player.height / 2 - 10

  player.x = mouseX
  player.y = mouseY
}

// UPDATE TO RUN EVERYTHING
// ------------------------------------------------

function update () {

  // PAUSE BUTTON
  if (paused) {
    ctx.fillStyle = 'red'
    ctx.fillText('PAUSED', 340, 200)
    pauseBattle1()
    pauseBattleMew1()
    return;}

  if (paused == false && player.lvl < 500) {
    playBattle()
  }

  if (paused == false && player.lvl >= 500 && health > 0) {
    playBattleMew()
  }

  // EVOLUTION EFFECTS

  function evolution () {
    if (player.lvl == 20 || player.lvl == 60 || player.lvl == 120) {
      playLevel()
    }
  }

  evolution()

  // CLEAR CANVAS TO AVOID DUPLICATES
  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  // ADD FRAME COUNT FOR MODULARS TO WORK
  frameCount++

  // GENERATE ENEMIES
  grassGenerator()
  waterGenerator()
  bossGenerator()

  // GENERATE UPGRADES
  upgradeGenerator()

  // GENERATE PLAYER ATTACKS
  fireGenerator()

  // SHOW BOX MESSAGE

  if (player.lvl == 150 && waterCount == 0) {
    paused = true
    waterCount++
    waterBox.style.display = 'block'
  }

  if (player.lvl >= 500 && psyCount == 0) {
    paused = true
    psyCount++
    psyBox.style.display = 'block'
  }

  // LOOP THROUGH LIST, DRAW THEM OUT, AND ASSIGN COLLISION LOGIC TO THEM

  // LOGIC OF NORMAL FIRE HITTING ENEMIES
  for (var key in fireList) {
    updateObject(fireList[key])

    var toRemove = false
    fireList[key].timer++
    if (fireList[key].timer > 40) {
      toRemove = true
    }

    for (var key2 in enemyList) {
      var isColliding = testCollision(fireList[key], enemyList[key2])
      if (isColliding) {
        toRemove = true
        player.lvl += 5
        delete enemyList[key2]
      }
    }
    if (toRemove) {
      delete fireList[key]
    }
  }

  // LOGIC OF FIGHTING WITH MEWTWO
  for (var key in enemyList3) {
    updateObject2(enemyList3[key])

    for (var key2 in fireList) {
      var isColliding = testCollision(fireList[key2], enemyList3[key])
      if (isColliding) {
        delete fireList[key2]
        // toRemove = true
        health -= (Math.floor(Math.random() * 20))

        if (health <= 0) {
          delete enemyList3[key]
          //  pause = false
          pauseBattleMew()
          //  pauseBattleMew1()
          playVictory()
        //  alert('Congrats! You defeated Mewtwo. You are truly a Pokemon Master!')
        //  newGame()
        }
      }
    }
    // for(var key2 in fireList){
    var isColliding = testCollision(player, enemyList3[key])
    if (isColliding) {
      player.hp -= 20

      if (player.hp <= 0) {
        var timeSurvived = Date.now() - startTime
        // alert('You Lost! You died fighting with Mewtwo at level ' + player.lvl + ' The game will now reset.')
        // newGame()

      }
    }
  }

  // LOGIC TO POTION
  for (var key in upgradeList) {
    updateObject(upgradeList[key])

    var isColliding = testCollision(player, upgradeList[key])
    if (isColliding && player.hp > 0) {
      //  console.log('Colliding!')
      player.hp += 20

      if (player.hp > 100) {
        player.hp = 100
      }

      delete upgradeList[key]
    }
  }

  // LOGIC TO ATTACK BOOST
  for (var key in upgradeList2) {
    updateObject(upgradeList2[key])

    var isColliding = testCollision(player, upgradeList2[key])
    if (isColliding && player.hp > 0) {
      //  console.log('Colliding!')
      player.atkSpd += 1

      if (player.atkSpd > 20) {
        player.atkSpd = 20
      }

      delete upgradeList2[key]
    }
  }

  // LOGIC TO GRASS ENEMY LIST
  for (var key in enemyList) {
    updateObject(enemyList[key])

    // check for collision
    var isColliding = testCollision(player, enemyList[key])
    if (isColliding) {
      //  console.log('Colliding!')
      player.hp -= 2
      delete enemyList[key]

      if (player.hp <= 0) {
        var timeSurvived = Date.now() - startTime
        // alert('You Lost! You died at level ' + player.lvl)
        pauseBattle()
        // newGame()

      }
    }
  }

  // LOGIC TO WATER ENEMY LIST
  for (var key in enemyList2) {
    updateObject(enemyList2[key])

    // check for collision
    var isColliding = testCollision(player, enemyList2[key])
    if (isColliding) {
      //  console.log('Colliding!')
      player.hp -= 5
      delete enemyList2[key]

      if (player.hp <= 0) {
        var timeSurvived = Date.now() - startTime
        //  alert('You Lost! You died at level ' + player.lvl)
        pauseBattle()
      //  newGame()
      }
    }
  }

  // LOGIC TO PLASMA BALL
  for (var key in fireList2) {
    updateObject2(fireList2[key])

    var isColliding = testCollision(player, fireList2[key])
    if (isColliding) {
      //  console.log('Colliding!')
      {
        player.hp -= 2
      }

      // OFFSET COLLISION DAMAGE
      if (health <= 0) {
        player.hp += 2
      }

      if (player.hp <= 0) {
        var timeSurvived = Date.now() - startTime
        // alert('You died fighting with Mewtwo at level ' + player.lvl + '. Try again!')
        // newGame()

      }
    }
  }

  // DRAW PLAYER
  drawPlayer(player)

  // FILL TEXT IN CANVAS
  ctx.textAlign = 'center'
  ctx.fillText(player.hp + 'HP', 120, 32)
  ctx.fillText('Level: ' + player.lvl, 320, 32)
  ctx.fillText('Atk Spd: ' + player.atkSpd, 540, 32)

  if (player.lvl >= 500) {
    ctx.fillStyle = 'red'
    ctx.fillText('Mewtwo HP:' + health, 320, 60)
  }

  if (player.hp <= 0 && player.lvl < 500) {
    pauseBattle()
    playGhost()
    ctx.fillStyle = 'red'
    ctx.fillText('You died at level:' + player.lvl, 350, 150)
    ctx.fillText('Better luck next time!', 350, 210)
    ctx.fillText('Press R to restart the game', 350, 270)
  }

  if (player.hp <= 0 && player.lvl >= 500) {
    pauseBattleMew()
    playGhost()
    ctx.fillStyle = 'red'
    ctx.fillText('You died fighting Mewtwo at level:' + player.lvl, 350, 150)
    ctx.fillText('You were so close to defeating him!', 350, 210)
    ctx.fillText('Press R to restart the game', 350, 270)
  }

  if (health <= 0) {
    ctx.fillStyle = 'gold'
    ctx.fillText('Congrats on beating Mewtwo!', 350, 150)
    ctx.fillText('Your next adventure is waiting for you.', 350, 210)
    ctx.fillText('Press R to restart the game', 350, 270)
  }
}

// END OF UPDATE FUNCTION//
// ----------------------------------------

// CREATING A NEWGAME WHEN GAME ENDS

function newGame () {
  player.hp = 100
  startTime = Date.now()
  frameCount = 0
  score = 0
  waterCount = 0
  psyCount = 0
  player.lvl = 0
  player.atkSpd = 0
  player.mewtwo = 0
  enemyList = {}
  enemyList2 = {}
  enemyList3 = {}
  fireList = {}
  fireList2 = {}
  upgradeList = {}
  upgradeList2 = {}
  health = 100
  pauseVictory()
  pauseBattleMew()
  playBattle()
  pauseGhost()
}

// GENERATE ENEMY

function grassGenerator () {
  if (player.lvl < 500 && frameCount % 5 === 0) {
    enemy(Math.random(), 0, Math.random() * HEIGHT - 10, 10, 0)
  }
  if (player.lvl < 500 && player.lvl >= 20 && frameCount % 5 === 0) {
    enemy2(Math.random(), Math.random() * WIDTH - 10, 0, 0, 15)
  }
  if (player.lvl < 500 && player.lvl >= 60 && frameCount % 3 === 0) {
    enemy3(Math.random(), Math.random() * WIDTH, Math.random() * HEIGHT, 10, 10)
  }
}

function waterGenerator () {
  if (player.lvl < 500 && player.lvl >= 150 && frameCount % 60 === 0) {
    enemy4(Math.random(), 0, 240, 5, 0)
    enemy4(Math.random(), 690, 120, -5, 0)
  }
  if (player.lvl < 500 && player.lvl >= 250 && frameCount % 60 === 0) {
    enemy5(Math.random(), 200, 380, 0, -5)
    enemy5(Math.random(), 400, 0, 0, 5)
  }
  if (player.lvl < 500 && player.lvl >= 350 && frameCount % 10 === 0) {
    enemy6(Math.random(), Math.random() * WIDTH, Math.random() * HEIGHT, 5, 5)
  }
}

function bossGenerator () {
  if (player.lvl >= 500 && player.mewtwo == 0) {
    pauseBattle()
    playBattleMew()
    player.hp = 100
    player.mewtwo++
    enemy7(Math.random(), 300, 130, 5, 5)
  }
  if (player.lvl >= 500 && frameCount % 30 === 0) {
    plasmaFire(Math.random(), Math.random() * WIDTH - 30, Math.random() * HEIGHT - 30, 5, -5)
    plasmaFire(Math.random(), Math.random() * WIDTH - 30, Math.random() * HEIGHT - 30, -5, 5)
  }
}

// GENERATE UPGRADES

function upgradeGenerator () {
  if (frameCount % 150 == 0 && player.hp > 0) {
    upgrade(Math.random(), Math.random() * WIDTH - 20, Math.random() * HEIGHT - 20, 0, 0)
  }
  if (frameCount % 180 == 0 && player.hp > 0) {
    atkSpd(Math.random(), Math.random() * WIDTH - 20, Math.random() * HEIGHT - 20, 0, 0)
  }
}

// GENERATE FIRE FROM PLAYER

function fireGenerator () {
  if ((frameCount) % (30 - player.atkSpd) === 0 && player.hp > 0) {
    fire(Math.random(), player.x, player.y, -10, 0)
  }
  if (player.lvl >= 20 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0) {
    fire(Math.random(), player.x, player.y, 0, -10)
  }
  if (player.lvl >= 60 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0) {
    fire(Math.random(), player.x, player.y, 10, 0)
    fire(Math.random(), player.x, player.y, 0, 10)
  }
  if (player.lvl >= 120 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0) {
    blueFire(Math.random(), player.x, player.y, 10, 10)
    blueFire(Math.random(), player.x, player.y, -10, -10)
    blueFire(Math.random(), player.x, player.y, 10, -10)
    blueFire(Math.random(), player.x, player.y, -10, 10)
  }
}

// START AND PAUSE BUTTON

var start = 0

var playBox = document.getElementById('play')
var waterBox = document.getElementById('waterwarn')
var psyBox = document.getElementById('psychicwarn')

document.onkeydown = function (event) {
  if (event.keyCode === 83 && start === 0) {
    setInterval(update, 50)
    // update()
    playBattle()
    playBox.style.display = 'none'
    start++
  }
  else if (event.keyCode === 80) {
    paused = !paused
    waterBox.style.display = 'none'
    psyBox.style.display = 'none'
  }
  if (event.keyCode === 82) {
    newGame()
  }
}

// EXPERIMENT WITH CONSTURCTORS

// var pokemon = [{
//   height: 40,
//   width: 40,
//   img: bellsprout
// }, {
//   height: 70,
//   width: 70,
//   img: weepin
// }]

// function generateEnemyX(enemyIndex) {
//    pokemon[0].id = Math.random()
//    pokemon[0].x = 0
//    pokemon[0].y = Math.random() * HEIGHT - 10
//    pokemon[0].spdX = 10
//    pokemon[0].spdY = 0
//  }

// function generateEnemy(enemyIndex) {
//   $enemyHp[0].value = enemyRoster[enemyIndex].max
//   $enemyHp[0].max = enemyRoster[enemyIndex].max
//   var $enemyImage = $('#enemy')
//   $enemyImage.attr('src', enemyRoster[enemyIndex].src)
//   dangerZone()
// }

// function allObjects(id,x,y,spdX,spdY){
//   var enemy = {
//   id:id,
//   x:x,
//   spdX:spdX,
//   y:y,
//   spdY:spdY,
//  }
//  enemyList[id] = enemy
// }

// allObjects(pokemon[0](Math.random(),0,Math.random()* HEIGHT - 10,10,0))
