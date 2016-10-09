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

// COUNTERS//
var frameCount = 0
// var startTime = Date.now()
var health = 100
var megaHealth = 100
var paused = false
var boxPaused = false
var waterCount = 0
var psyCount = 0
var winCount = 0
var evoCount = 0
var diteCount = 0
var megaCount = 0
var megaMewCount = 0
var mewCount = 0
var fieldCount = 0
var finalCount = 0

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
  mewtwo: 0,
  dite: 0,
  mega : 0,
  mew: 0
}

// LIST
var enemyList = {}
var enemyList2 = {}
var enemyList3 = {}
var enemyList4 = {}
var friendList = {}
var upgradeList = {}
var upgradeList2 = {}
var upgradeList3 = {}
var fireList = {}
var fireList2 = {}
var fireList3 = {}
var fireList4 = {}
var fieldList = {}
var partyList = {}

// TEST FOR COLLISION. OLD COLLISION FORMULAR INSIDE
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

function enemy (type, id, x, y, spdX, spdY, width, height, img, timer) {
  var enemy = {
    type: type,
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    id: id,
    width: width,
    height: height,
    img: img,
    timer: 0
  }
  if (enemy.type === 'grass') {
    enemyList[id] = enemy
  }
  if (enemy.type === 'water') {
    enemyList2[id] = enemy
  }
  if (enemy.type === 'psychic') {
    enemyList3[id] = enemy
  }
  if (enemy.type === 'upgrade1') {
    upgradeList[id] = enemy
  }
  if (enemy.type === 'upgrade2') {
    upgradeList2[id] = enemy
  }
  if (enemy.type === 'upgrade3') {
    upgradeList3[id] = enemy
  }
  if (enemy.type === 'fire') {
    fireList[id] = enemy
  }
  if (enemy.type === 'plasma') {
    fireList2[id] = enemy
  }
  if (enemy.type === 'energy') {
    fireList3[id] = enemy
  }
  if (enemy.type === 'mega') {
    enemyList4[id] = enemy
  }
  if (enemy.type === 'friend') {
    friendList[id] = enemy
  }
  if (enemy.type === 'blast') {
    fireList4[id] = enemy
  }
  if (enemy.type === 'field') {
    fieldList[id] = enemy
  }
  if (enemy.type === 'party') {
    partyList[id] = enemy
  }
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
  if (player.hp > 0 && player.lvl >= 60 && player.dite < 5) {
    ctx.drawImage(img.char3, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp > 0 && player.dite >= 5) {
    ctx.drawImage(img.mega, something.x, something.y, something.width, something.height)
    ctx.fillStyle = 'black'
  }
  if (player.hp <= 0) {
    ctx.drawImage(img.sad, something.x, something.y, 100, 90)
    ctx.fillStyle = 'black'
  }
}

function drawObject (something) {
  ctx.drawImage(something.img, something.x, something.y, something.width, something.height)
}

// ASSIGNING WHICH OBJECTS WILL INHERIT WHICH PHYSICS
function updateObject3 (something) {
  updatePosition3(something)
  drawObject(something)
}

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
}

function updatePosition2 (something) {
  something.x += something.spdX
  something.y += something.spdY

  if (something.x > 640 || something.x < 0) {
    something.spdX = -something.spdX
  }

  if (something.y > 320 || something.y < 0) {
    something.spdY = -something.spdY
  }
}

function updatePosition3 (something) {
  something.x += something.spdX
  something.y += something.spdY

  if (something.x > 660 || something.x < 0) {
    something.spdX = -something.spdX
  }

  if (something.y > 350 || something.y < 0) {
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
    pauseBattle()
    pauseBattleMew()
    pauseLast()
    return
  }

  if (paused === false && player.lvl < 500) {
    playBattle()
  }

  if (paused === false && player.lvl >= 500 && health > 10) {
    playBattleMew()
  }

  if (paused === false && player.lvl >= 500 && health <= 10 && megaHealth > 0 && finalCount === 0) {
    playLast()
  }

  if (boxPaused) {
    return
  }

  // EVOLUTION EFFECTS

  function evolution () {
    if (player.lvl === 20 || player.lvl === 60) {
      playLevel()
    }
  }

  function megaEvolution () {
    if (player.dite === 5 && diteCount === 0) {
      diteCount ++
      playCry()
    }
  }

  evolution()
  megaEvolution()

  // CLEAR CANVAS TO AVOID DUPLICATES
  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  // ADD FRAME COUNT FOR MODULARS TO WORK
  frameCount++

  // GENERATE ENEMIES
  grassGenerator()
  waterGenerator()
  bossGenerator()
  megaBossGenerator()

  // GENERATE UPGRADES
  upgradeGenerator()

  // GENERATE PLAYER ATTACKS
  fireGenerator()
  // blastGenerator()

  //GENERATE PARTY ITEMS
  partyGenerator ()

  // SHOW BOX MESSAGE

  if (player.lvl >= 70 && evoCount === 0) {
    boxPaused = true
    evoCount++
    evoBox.style.display = 'block'
  }

  if (player.lvl >= 150 && waterCount === 0) {
    boxPaused = true
    waterCount++
    waterBox.style.display = 'block'
  }

  if (player.dite === 5 && megaCount === 0) {
    boxPaused = true
    megaCount++
    megaBox.style.display = 'block'
  }

  if (player.lvl >= 500 && psyCount === 0) {
    boxPaused = true
    psyCount++
    psyBox.style.display = 'block'
  }

  if (health <= 10 && megaMewCount === 0) {
    boxPaused = true
    megaMewCount++
    mewBox.style.display = 'block'
  }

  if (player.lvl >= 500 && player.hp <= 20 && health <= 10 && mewCount === 0) {
    boxPaused = true
    mewCount++
    player.hp = 100
    mew151Box.style.display = 'block'
  }

  if (megaHealth <= 50 && fieldCount === 0) {
    boxPaused = true
    fieldCount++
    fieldBox.style.display = 'block'
  }

  if (megaHealth <= 0 && winCount === 0 && finalCount === 0) {
    winCount++
    finalCount++
    resetLast();
    playVictory()
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
    for (var key2 in enemyList2) {
      var isColliding = testCollision(fireList[key], enemyList2[key2])
      if (isColliding && player.dite === 5) {
        toRemove = true
        player.lvl += 1
        delete enemyList2[key2]
      }
    }
    if (toRemove) {
      delete fireList[key]
    }
  }

  //LOGIC OF FIREBLAST HITTING ENEMIES

  for (var key in fireList4) {
    updateObject(fireList4[key])

    var toRemove = false

    for (var key2 in fireList3) {
      var isColliding = testCollision(fireList4[key], fireList3[key2])
      if (isColliding) {
        toRemove = true
        delete fireList3[key2]
      }
    }
    //
    for (var key4 in fieldList) {
      var isColliding = testCollision(fireList4[key], fieldList[key4])
      if (isColliding) {
        toRemove = true
        megaHealth += 3
       }
     }

      for (var key3 in enemyList4) {
        var isColliding = testCollision(fireList4[key], enemyList4[key3])
        if (isColliding) {
          toRemove = true
          megaHealth -= 2
          // (Math.round(Math.random() * 10))
        }
    }
    if (toRemove) {
      delete fireList4[key]
  }
}

  // LOGIC OF FIGHTING WITH MEWTWO
  for (var key in enemyList3) {
    updateObject2(enemyList3[key])

    for (var key2 in fireList) {
      var isColliding = testCollision(fireList[key2], enemyList3[key])
      if (isColliding) {
        delete fireList[key2]
        health -= (Math.floor(Math.random() * 5))

        if (health <= 10 && megaHealth > 0 && finalCount === 0) {
          delete enemyList3[key]
          resetBattleMew()
          playLast()
        }
      }
    }
    var isColliding = testCollision(player, enemyList3[key])
    if (isColliding) {
      player.hp -= 10
    }
  }

  //LOGIC OF FIGHTING WITH MEGA MEWTWO
  for (var key in enemyList4) {
    updateObject(enemyList4[key])

    if(megaHealth <= 0){
     delete enemyList4[key]
    }

    var isColliding = testCollision(player, enemyList4[key])
    if (isColliding) {
      player.hp -= 10

    }
  }

  // LOGIC OF FORCE FIELD
  for (var key in fieldList) {
    updateObject(fieldList[key])

    var toRemove = false;
    fieldList[key].timer++;
    if(fieldList[key].timer > 30) {
    toRemove = true;
    }

    if(toRemove){
    delete fieldList[key]
    }
  }

  //LOGIC OF MEW
  for (var key in friendList) {
    updateObject2(friendList[key])

    var isColliding = testCollision(player, friendList[key])
    if (isColliding) {
      player.hp += 3

    if (player.hp > 100){
      player.hp = 100
    }

    }
  }

  //LOGIC OF ENERGY BALL
  for (var key in fireList3) {
    updateObject3(fireList3[key])

    var toRemove = false;
    fireList3[key].timer++;
    if(fireList3[key].timer > 400) {
    toRemove = true;
    }

    var isColliding = testCollision(player, fireList3[key])
    if (isColliding & finalCount === 0){
    player.hp -= 2

    }
    if(toRemove){
    delete fireList3[key];
    }
  }

  // LOGIC TO POTION
  for (var key in upgradeList) {
    updateObject(upgradeList[key])

    var isColliding = testCollision(player, upgradeList[key])
    if (isColliding && player.hp > 0) {
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
      player.atkSpd += 1

      if (player.atkSpd > 20) {
        player.atkSpd = 20
      }

      delete upgradeList2[key]
    }
  }

  // LOGIC TO CHARIZARDITE
  for (var key in upgradeList3) {
    updateObject(upgradeList3[key])


    var toRemove = false;
    upgradeList3[key].timer++;
    if(upgradeList3[key].timer > 25) {
    toRemove = true;
    }

    var isColliding = testCollision(player, upgradeList3[key])
    if (isColliding && player.hp > 0) {
      player.dite += 1
      playDite()

      if (player.dite >= 5) {
        player.dite = 5
      }

      delete upgradeList3[key]
    }
    if(toRemove){
    delete upgradeList3[key];
    }
  }

  // LOGIC TO GRASS ENEMY LIST
  for (var key in enemyList) {
    updateObject(enemyList[key])

    // check for collision
    var isColliding = testCollision(player, enemyList[key])
    if (isColliding) {
      player.hp -= 2
      delete enemyList[key]

      if (player.hp <= 0) {
        resetBattle()
      }
    }
  }

  // LOGIC TO WATER ENEMY LIST
  for (var key in enemyList2) {
    updateObject(enemyList2[key])

    // check for collision
    var isColliding = testCollision(player, enemyList2[key])
    if (isColliding) {
      player.hp -= 5
      delete enemyList2[key]

      if (player.hp <= 0) {
        resetBattle()
      }
    }
  }

  // LOGIC TO PLASMA BALL
  for (var key in fireList2) {
    updateObject2(fireList2[key])

    var toRemove = false;
    if(health <= 10) {
    toRemove = true;
    }

    var isColliding = testCollision(player, fireList2[key])
    if (isColliding && health > 0) {
      player.hp -= 2
    }

    if(toRemove){
    delete fireList2[key]
    }
  }

  // DRAW PLAYER
  drawPlayer(player)

  // FILL TEXT IN CANVAS
  ctx.textAlign = 'center'
  ctx.fillText(player.hp + 'HP', 120, 32)
  ctx.fillText('Level: ' + player.lvl, 320, 32)
  ctx.fillText('Atk Spd: ' + player.atkSpd, 540, 32)

  if (player.lvl >= 500 && health > 10) {
    ctx.fillStyle = 'red'
    ctx.fillText('Mewtwo HP:' + health, 320, 60)
  }

  if (player.lvl >= 1 && health <= 10) {
    ctx.fillStyle = 'red'
    ctx.fillText('Mega-Mewtwo HP:' + megaHealth, 330, 60)
  }

  if (player.hp <= 0 && player.lvl < 500) {
    resetBattle()
    playGhost()
  }

  if (player.hp <= 0 && player.lvl >= 500) {
    resetBattleMew()
    resetLast()
    playGhost()
  }
}

// END OF UPDATE FUNCTION//
// ----------------------------------------

// CREATING A NEWGAME WHEN GAME ENDS

function newGame () {
  player.hp = 100
  frameCount = 0
  waterCount = 0
  psyCount = 0
  winCount = 0
  evoCount = 0
  megaCount = 0
  diteCount = 0
  megaMewCount = 0
  mewCount = 0
  fieldCount = 0
  finalCount = 0
  player.lvl = 0
  player.atkSpd = 0
  player.mewtwo = 0
  player.dite = 0
  player.mega = 0
  player.mew = 0
  enemyList = {}
  enemyList2 = {}
  enemyList3 = {}
  enemyList4 = {}
  fireList = {}
  fireList2 = {}
  fireList3 = {}
  fieldList = {}
  friendList = {}
  fieldList = {}
  upgradeList = {}
  upgradeList2 = {}
  health = 100
  megaHealth = 100
  resetBattle()
  pauseVictory()
  resetBattleMew()
  resetLast()
  pauseGhost()
  playBattle()
}

// GENERATE ENEMY

function grassGenerator () {
  if (player.lvl < 500 && frameCount % 5 === 0) {
    enemy('grass',Math.random(), 0, Math.random() * HEIGHT - 10, 10, 0, 40, 40, img.bellsprout)
  }
  if (player.lvl < 500 && player.lvl >= 20 && frameCount % 5 === 0) {
    enemy('grass',Math.random(), Math.random() * WIDTH - 10, 0, 0, 15, 40, 40, img.weepin)
  }
  if (player.lvl < 500 && player.lvl >= 60 && frameCount % 3 === 0) {
    enemy('grass',Math.random(), Math.random() * WIDTH, Math.random() * HEIGHT, 10, 10, 50, 60, img.victree)
  }
}

function waterGenerator () {
  if (player.lvl < 500 && player.lvl >= 150 && frameCount % 60 === 0) {
    enemy('water',Math.random(), 0, 240, 5, 0, 60, 60, img.blast)
    enemy('water',Math.random(), 690, 120, -5, 0, 60, 60, img.blast)
  }
  if (player.lvl < 500 && player.lvl >= 250 && frameCount % 60 === 0) {
    enemy('water',Math.random(), 200, 380, 0, -5, 60, 60, img.gay)
    enemy('water',Math.random(), 400, 0, 0, 5, 60, 60, img.gay)
  }
  if (player.lvl < 500 && player.lvl >= 350 && frameCount % 10 === 0) {
    enemy('water',Math.random(), Math.random() * WIDTH, Math.random() * HEIGHT, 5, 5, 60, 60, img.lap)
  }
}

function bossGenerator () {
  if (player.lvl >= 500 && player.mewtwo == 0 && health > 10) {
    resetBattle()
    playBattleMew()
    player.hp = 100
    player.mewtwo++
    enemy('psychic',Math.random(), 300, 130, 5, 5, 80, 80, img.mewtwo)
  }
  if (player.lvl >= 500 && frameCount % 50 === 0 && health > 10) {
    enemy('plasma',Math.random(), Math.random() * WIDTH - 30, Math.random() * HEIGHT - 30, 5, -5, 40, 32, img.plasma)
    enemy('plasma',Math.random(), Math.random() * WIDTH - 30, Math.random() * HEIGHT - 30, -5, 5, 40, 32, img.plasma)
  }
}

function megaBossGenerator () {
  if (player.lvl >= 500 && player.mega == 0 && health <= 10) {
    resetBattleMew()
    // playLast()
    player.hp = 100
    player.mega++
    enemy('mega',Math.random(), 310, 155, 0, 0, 80, 80, img.megamew)
    // && health <= 10
  }
  if (player.lvl >= 500 && health <= 10 && frameCount % 8 === 0 && finalCount === 0){
    enemy('energy',Math.random(), 335, 180, 1, 15, 40, 40, img.redball)
    enemy('energy',Math.random(), 335, 180, -1, -15, 40, 40, img.redball)
  }
  if (mewCount >= 1 && frameCount % 5 === 0 && finalCount === 0){
    enemy('energy',Math.random(), 335, 180, 15, 1, 40, 40, img.redball)
    enemy('energy',Math.random(), 335, 180, -15, -1, 40, 40, img.redball)
  }
  if (player.lvl >= 500 && player.mew == 0 && health <= 10 && player.hp <= 20) {
    player.mew++
    enemy('friend',Math.random(), 70, 70, 13, 8, 50, 50, img.mew)
  }
  if (player.lvl >= 500 && health <= 10 && megaHealth <= 50 && frameCount % 80 === 0 && finalCount === 0) {
    enemy('field',Math.random(), 290, 135, 0, 0, 120, 120, img.field)
    // && health <= 10 && megaHealth <= 50
  }
}

// GENERATE UPGRADES

function upgradeGenerator () {
  if (frameCount % 150 === 0 && player.hp > 0 && health > 10) {
    enemy('upgrade1',Math.random(), Math.random() * WIDTH - 20, Math.random() * HEIGHT - 20, 0, 0, 30, 40, img.potion)
  }
  if (frameCount % 180 === 0 && player.hp > 0 && health > 10) {
    enemy('upgrade2',Math.random(), Math.random() * WIDTH - 20, Math.random() * HEIGHT - 20, 0, 0, 45, 60, img.speed)
  }
  if (player.lvl >= 70 && frameCount % 170 === 0 && player.hp > 0 && player.dite < 5) {
    enemy('upgrade3',Math.random(), Math.random() * WIDTH - 20, Math.random() * HEIGHT - 20, 0, 0, 50, 50, img.dite)
  }
}

// GENERATE FIRE FROM PLAYER

function fireGenerator () {
  if ((frameCount) % (30 - player.atkSpd) === 0 && player.hp > 0 && health > 10) {
    enemy('fire',Math.random(), player.x, player.y, -10, 0, 30, 30, img.fire)
  }
  if (player.lvl >= 20 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0 && health > 10) {
    enemy('fire',Math.random(), player.x, player.y, 0, -10, 30, 30, img.fire)
  }
  if (player.lvl >= 60 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0 && health > 10) {
    enemy('fire',Math.random(), player.x, player.y, 10, 0, 30, 30, img.fire)
    enemy('fire',Math.random(), player.x, player.y, 0, 10, 30, 30, img.fire)
  }
  if (player.dite >= 5 && player.hp > 0 && frameCount % (30 - player.atkSpd) === 0 && health > 10) {
    enemy('fire',Math.random(), player.x, player.y, 10, 10, 50, 50, img.bluefire)
    enemy('fire',Math.random(), player.x, player.y, -10, -10, 50, 50, img.bluefire)
    enemy('fire',Math.random(), player.x, player.y, 10, -10, 50, 50, img.bluefire)
    enemy('fire',Math.random(), player.x, player.y, -10, 10, 50, 50, img.bluefire)
  }
}

function blastGenerator() {
  if (player.hp > 0 && mewCount >= 1) {
    enemy('blast',Math.random(), player.x, player.y, 0, -15, 50, 50, img.fireblast)
    enemy('blast',Math.random(), player.x, player.y, 15, -1, 50, 50, img.fireblast)
    enemy('blast',Math.random(), player.x, player.y, -15, -1, 50, 50, img.fireblast)
    enemy('blast',Math.random(), player.x, player.y, -15, 15, 50, 50, img.fireblast)
    enemy('blast',Math.random(), player.x, player.y, 15, 15, 50, 50, img.fireblast)
  }
 }

// player.hp > 0 && health <= 10 && mewCount >= 1 &&


function partyGenerator () {
  if (frameCount % 1 === 0 && finalCount === 1) {
    enemy('party',Math.random(), Math.random() * WIDTH, 380, 0, -10, 40, 70, img.party1)
  }
  if (frameCount % 1 === 0 && finalCount === 1) {
    enemy('party',Math.random(), Math.random() * WIDTH, 0, 0, 10, 50, 50, img.party2)
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
var evoBox = document.getElementById('evo')
var megaBox = document.getElementById('mega')
var mewBox = document.getElementById('mewBox')
var mew151Box = document.getElementById('mew151Box')
var fieldBpx = document.getElementById('fieldBox')

document.onkeydown = function (event) {
  if (event.keyCode === 83 && start === 0) {
    setInterval(update, 40)
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
    evoBox.style.display = 'none'
    megaBox.style.display = 'none'
    mewBox.style.display = 'none'
    mew151Box.style.display = 'none'
    fieldBox.style.display = 'none'
  }
  else if (event.keyCode === 70) {
    blastGenerator()
  }
  if (event.keyCode === 82) {
    newGame()
    deathBox.style.display = 'none'
    death2Box.style.display = 'none'
    winBox.style.display = 'none'
  }
}
