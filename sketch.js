var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);

  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x)

obstacleGroup = createGroup();
  FoodGroup = createGroup();

survivalTime=0;

score=0;
}
function draw() {
background("white")
 
stroke("white");
textSize(20);
fill("white");
text("Score:",290,10);
  
stroke("black");
textSize(20);
fill("black");

survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time :"+ survivalTime,100,50)

if (ground.x < 0){
      ground.x = ground.width/2;
    }
 if(keyDown("space")) {
    monkey.velocityY = -12;
   
 } 
    
    monkey.velocityY = monkey.velocityY + 0.8 
  

spawnobstacle(); 
food();
  
drawSprites(); 
}
function food(){
if (frameCount % 80 === 0){
banana=createSprite(110,390,20,20);
banana.y = Math.round(random(120,200));
banana.addImage(bananaImage);
banana.velocityX=-8;
banana.lifetime=350;
banana.scale=0.1;
FoodGroup.add(banana);
}
}
function spawnobstacle(){
if (frameCount % 100 === 0){
obstacle=createSprite(10,350,20,20);
obstacle.addImage(obstacleImage);
obstacle.velocityX=-4;
obstacle.lifetime=350;
obstacle.scale=0.1;
obstacleGroup.add(obstacle);
}
}