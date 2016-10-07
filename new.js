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
img.speed = new Image()
img.speed.src = 'images/speed.png'
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
img.party1 = new Image()
img.party1.src = 'images/party1.png'
img.party2 = new Image()
img.party2.src = 'images/party2.png'

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
// var startTime = Date.now()
var health = 100
var paused = false
var boxPaused = false
var waterCount = 0
var psyCount = 0
var boxCount = 0

// PLAYER SPECS//
var player = {
  x: 50,
  y: 40,
  hp: 100,
  width: 50,
  height: 50,
  img: img.char1,
  lvl: 0,
  atkSpd: 0,
  mewtwo: 0
}

// LIST
var enemyList = {}
var enemyList2 = {}
var enemyList3 = {}
var upgradeList = {}
var upgradeList2 = {}
var fireList = {}
var fireList2 = {}
var partyList = {}

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
  return rect1.x <= rect2.x + rect2.width &&
    rect2.x <= rect1.x + rect1.width &&
    rect1.y <= rect2.y + rect2.height &&
    rect2.y <= rect1.y + rect1.height
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

function enemy (type, id, x, y, spdX, spdY, width, height, img) {
  var enemy = {
    type: type,
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: width,
    height: height,
    img: img
  }
  if (enemy.type === "grass")
  enemyList[id] = enemy
  if (enemy.type === "water")
  enemyList2[id] = enemy
  if (enemy.type === "psychic")
  enemyList3[id] = enemy
  if (enemy.type === "upgrade1")
  upgradeList[id] = enemy
  if (enemy.type === "upgrade2")
  upgradeList2[id] = enemy
  if (enemy.type === "fire")
  fireList[id] = enemy
  if (enemy.type === "plasma")
  fireList2[id] = enemy
  if (enemy.type === "party")
  partyList[id] = enemy
}


// DRAW OBJECTS
function drawPlayer (something) {
  if (player.hp > 0 && player.lvl < 20) {
    ctx.drawImage(img.char1, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp > 0 && player.lvl >= 20 && player.lvl < 60) {
    ctx.drawImage(img.char2, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp > 0 && player.lvl >= 60 && player.lvl < 120) {
    ctx.drawImage(img.char3, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp > 0 && player.lvl >= 120 && health > 0) {
    ctx.drawImage(img.mega, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp <= 0) {
    ctx.drawImage(img.sad, something.x, something.y, 100, 90)
    ctx.fillStyle = 'black'
  }
  if (health <= 0) {
    ctx.drawImage(img.crown, something.x, something.y, 100, 100)
    ctx.fillStyle = 'black'
  }
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

  if (mouseX < player.width / 2) {
    mouseX = player.width / 2 - 10
  }
  if (mouseX > WIDTH - player.width / 2) {
    mouseX = WIDTH - player.width / 2 - 10
  }
  if (mouseY < player.height / 2) {
    mouseY = player.height / 2 - 10
  }
  if (mouseY > HEIGHT - player.height / 2) {
    mouseY = HEIGHT - player.height / 2 - 10
  }

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
    return
  }

  if (paused === false && player.lvl < 500) {
    playBattle()
  }

  if (paused === false && player.lvl >= 500 && health > 0) {
    playBattleMew()
  }

  if (boxPaused) {
    return
  }

  // EVOLUTION EFFECTS

  function evolution () {
    if (player.lvl === 20 || player.lvl === 60 || player.lvl === 120) {
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

  //GENERATE PARTY ITEMS
  partyGenerator ()

  // SHOW BOX MESSAGE

  if (player.lvl === 150 && waterCount === 0) {
    boxPaused = true
    waterCount++
    waterBox.style.display = 'block'
  }

  if (player.lvl >= 500 && psyCount === 0) {
    boxPaused = true
    psyCount++
    psyBox.style.display = 'block'
  }

  if (health <= 0) {
    winBox.style.display = 'block'
  }

  if (player.lvl >= 500 && player.hp <= 0) {
    death2Box.style.display = 'block'
  }

  if (player.lvl <= 500 && player.hp <= 0) {
    deathBox.style.display = 'block'
  }

  // LOOP THROUGH LIST, DRAW THEM OUT, AND ASSIGN COLLISION LOGIC TO THEM

  //DRAW PARTY ITEMS
  for (var key in partyList) {
    updateObject(partyList[key])
  }

  // LOGIC OF FIRE HITTING ENEMIES
  for (var key in fireList) {
    updateObject(fireList[key])

    var toRemove = false

    for (var key2 in enemyList) {
      var isColliding = testCollision(fireList[key], enemyList[key2])
      if (isColliding) {
        toRemove = true
        player.lvl += 1
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
        health -= (Math.floor(Math.random() * 15))

        if (health <= 0) {
          delete enemyList3[key]
          pauseBattleMew()
          playVictory()
        }
      }
    }
    // for(var key2 in fireList){
    var isColliding = testCollision(player, enemyList3[key])
    if (isColliding) {
      player.hp -= 10
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

      if (player.atkSpd > 25) {
        player.atkSpd = 25
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
        pauseBattle()
      }
    }
  }

  // LOGIC TO WATER ENEMY LIST
  for (var key in enemyList2) {
    updateObject(enemyList2[key])

    // check for collision
    var isColliding = testCollision(player, enemyList2[key])
    if (isColliding) {
      player.hp -= 1
      delete enemyList2[key]

      if (player.hp <= 0) {
        pauseBattle()
      }
    }
  }

  // LOGIC TO PLASMA BALL
  for (var key in fireList2) {
    updateObject2(fireList2[key])

    var isColliding = testCollision(player, fireList2[key])
    if (isColliding && health > 0) {
      player.hp -= 2
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
  }

  if (player.hp <= 0 && player.lvl >= 500) {
    pauseBattleMew()
    playGhost()
  }
}

// END OF UPDATE FUNCTION//
// ----------------------------------------

// CREATING A NEWGAME WHEN GAME ENDS

function newGame () {
  player.hp = 100
  // startTime = Date.now()
  frameCount = 0
  waterCount = 0
  psyCount = 0
  boxCount = 0
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
  pauseBattle()
  pauseVictory()
  pauseBattleMew()
  pauseGhost()
  playBattle()
}

// GENERATE ENEMY

function grassGenerator () {
  if (player.lvl < 500 && frameCount % 5 === 0) {
    enemy("grass",Math.random(), 0, Math.random() * HEIGHT - 10, 10, 0, 40, 40, img.bellsprout)
  }
  if (player.lvl < 500 && player.lvl >= 20 && frameCount % 5 === 0) {
    enemy("grass",Math.random(), Math.random() * WIDTH - 10, 0, 0, 15, 40, 40, img.weepin)
  }
  if (player.lvl < 500 && player.lvl >= 60 && frameCount % 3 === 0) {
    enemy("grass",Math.random(), Math.random() * WIDTH, Math.random() * HEIGHT, 10, 10, 40, 40, img.victree)
  }
}

function waterGenerator () {
  if (player.lvl < 500 && player.lvl >= 150 && frameCount % 60 === 0) {
    enemy("water",Math.random(), 0, 240, 5, 0, 60, 60, img.blast)
    enemy("water",Math.random(), 690, 120, -5, 0, 60, 60, img.blast)
  }
  if (player.lvl < 500 && player.lvl >= 250 && frameCount % 60 === 0) {
    enemy("water",Math.random(), 200, 380, 0, -5, 60, 60, img.gay)
    enemy("water",Math.random(), 400, 0, 0, 5, 60, 60, img.gay)
  }
  if (player.lvl < 500 && player.lvl >= 350 && frameCount % 10 === 0) {
    enemy("water",Math.random(), Math.random() * WIDTH, Math.random() * HEIGHT, 5, 5, 60, 60, img.lap)
  }
}

function bossGenerator () {
  if (player.lvl >= 500 && player.mewtwo == 0) {
    pauseBattle()
    playBattleMew()
    player.hp = 100
    player.mewtwo++
    enemy("psychic",Math.random(), 300, 130, 5, 5, 80, 80, img.mewtwo)
  }
  if (player.lvl >= 500 && frameCount % 30 === 0) {
    enemy("plasma",Math.random(), Math.random() * WIDTH - 30, Math.random() * HEIGHT - 30, 5, -5, 30, 30, img.plasma)
    enemy("plasma",Math.random(), Math.random() * WIDTH - 30, Math.random() * HEIGHT - 30, -5, 5,30, 30, img.plasma)
  }
}

// GENERATE UPGRADES

function upgradeGenerator () {
  if (frameCount % 150 === 0 && player.hp > 0) {
    enemy("upgrade1",Math.random(), Math.random() * WIDTH - 20, Math.random() * HEIGHT - 20, 0, 0, 30, 40, img.potion)
  }
  if (frameCount % 120 === 0 && player.hp > 0) {
    enemy("upgrade2",Math.random(), Math.random() * WIDTH - 20, Math.random() * HEIGHT - 20, 0, 0, 30, 40, img.speed)
  }
}

// GENERATE FIRE FROM PLAYER

function fireGenerator () {
  if ((frameCount) % (30 - player.atkSpd) === 0 && player.hp > 0) {
    enemy("fire",Math.random(), player.x, player.y, -10, 0, 30, 30, img.fire)
  }
  if (player.lvl >= 20 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0) {
    enemy("fire",Math.random(), player.x, player.y, 0, -10, 30, 30, img.fire)
  }
  if (player.lvl >= 60 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0) {
    enemy("fire",Math.random(), player.x, player.y, 10, 0, 30, 30, img.fire)
    enemy("fire",Math.random(), player.x, player.y, 0, 10, 30, 30, img.fire)
  }
  if (player.lvl >= 120 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0) {
    enemy("fire",Math.random(), player.x, player.y, 10, 10, 50, 50, img.bluefire)
    enemy("fire",Math.random(), player.x, player.y, -10, -10, 50, 50, img.bluefire)
    enemy("fire",Math.random(), player.x, player.y, 10, -10, 50, 50, img.bluefire)
    enemy("fire",Math.random(), player.x, player.y, -10, 10, 50, 50, img.bluefire)
  }
}

function partyGenerator () {
  if (frameCount % 1 === 0 && health <= 0) {
    enemy("party",Math.random(), Math.random() * WIDTH, 380, 0, -10, 40, 70, img.party1)
  }
  if (frameCount % 1 === 0 && health <= 0) {
    enemy("party",Math.random(), Math.random() * WIDTH, 0, 0, 10, 50, 50, img.party2)
  }
}

// START AND PAUSE BUTTON

var start = 0

var playBox = document.getElementById('play')
var waterBox = document.getElementById('waterwarn')
var psyBox = document.getElementById('psychicwarn')
var deathBox = document.getElementById('death1')
var death2Box = document.getElementById('death2')
var winBox = document.getElementById('win')

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
  }
  else if (event.keyCode === 67) {
    boxPaused = !boxPaused
    waterBox.style.display = 'none'
    psyBox.style.display = 'none'
  }
  if (event.keyCode === 82) {
    newGame()
    deathBox.style.display = 'none'
    death2Box.style.display = 'none'
    winBox.style.display = 'none'
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
