var banana,bananaImg,bananaGroup,obstacleGroup,obstacle,obstacleImg,bg,bgImg,score,monkey,monkeyImg,ground

function preload() {
  bananaImg=loadImage("banana.png");
  obstacleImg=loadImage("stone.png");
  bgImg=loadImage("jungle.jpg");
  monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
}

function setup() {
  
  bg=createSprite(400,200,0,0);
  bg.addImage("backgrnd",bgImg);
  bg.velocityX=-2
  bg.x=bg.width/2
  
  
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  ground=createSprite(400,370,800,10);
  ground.visible=false;
  
  monkey=createSprite(40,360,10,10);
  monkey.addAnimation("monkeyy",monkeyImg);
  monkey.scale=0.06;
  
  score=0;
 
}
function draw() {
  Bananas();
  Obstacles();
  
   if(keyDown("space")&&monkey.y>330) {
  monkey.velocityY=-7;
  }
  
  monkey.velocityY=monkey.velocityY+0.3
  
   monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)){
       bananaGroup.destroyEach();
      score=score+2;
    } 
  
if(bg.x<0) {
  bg.x=bg.width/2
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.06;
    obstacleGroup.destroyEach();
  }
  
  switch(score){
    case 10 : monkey.scale=0.08;  
      break;
    case 20 : monkey.scale=0.10;  
      break;
    case 30 : monkey.scale=0.12;  
      break;
    case 40 : monkey.scale=0.14;  
      break;
      default:break;  
  }
  
  
 drawSprites(); 
  
  textSize(15);
  stroke("white");
  fill("white")
  text("score: "+score,300,100);
  
  
  
}
function Bananas() {
  if(World.frameCount % 80 === 0) {
    var banana=createSprite(400,random(200,300),10,10);
     banana.addImage(bananaImg);
     banana.scale=0.05;
     banana.velocityX=-3;
     banana.lifetime=150;
     bananaGroup.add(banana);
  }
}

function Obstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,355,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImg);
    obstacle.scale=0.10;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle); 
  }
}

