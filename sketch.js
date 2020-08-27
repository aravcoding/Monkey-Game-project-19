var bananaImage, obstacleImage, obstacleGroup, BG,score,monkey_running,Bg, foodGroup,monkey,banana,spawnBananas;

var invisibleGround;

function preload(){
  Bg=loadImage("jungle.png");
  monkey_running=loadImage("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  BG = createSprite (200,200,400,400);
  BG.x = BG.width /2;
  BG.velocityX = -4;
  BG.addImage("background",Bg);
  
  invisibleGround = createSprite(200,400,400,130);
  invisibleGround.visible = false;

  monkey = createSprite(50,320,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.05;
  
  
  var foodGroup = createGroup();
  var stoneGroup = createGroup();
  
  var score=0;
}



function draw() {
  background("white");
  
  if (BG.x < 0){
    BG.x = BG.width/2;
  }
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(invisibleGround);
  
    spawnBananas();
  
  drawSprites();
  
  
  
}
function spawnBananas(){
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.addAnimation("Banana",bananaImage);
    banana.velocityX = -6;
    banana.y = random(220,300);
    banana.lifetime=134;
    banana.scale=0.05;
    
    //BananaGroup.add(banana);
  }
}
