
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  ground=createSprite(300,390,600,25);
  ground.shapeColor="lightgreen";
  
  monkey=createSprite(80,200,4,4);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  obstacleGroup=new Group();
  foodGroup=new Group();
}


function draw() {
  
  background("white");
  
  servivaltime=Math.ceil(frameCount/frameRate());
  text("score:"+score,500,40);
  textSize(40);
  text("servivaltime:"+servivaltime,200,40);
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y>=210){
    
    monkey.velocityY=-14;
  }
  
monkey. velocityY = monkey. velocityY + 0.8;
  
  rocks();
  foods();
  
  drawSprites();

}

function rocks(){
  
  if(World.frameCount%400===0){
  obstacle=createSprite(800,340,4,4);
  obstacle.addImage("image",obstacleImage);
    obstacle.velocityX=-4;
  obstacle.scale=0.2;
    
    obstacleGroup.add(obstacle);
  }
}

function foods(){
  
  if(World.frameCount%120===0){
    
    banana=createSprite(800,100,4,4);
    banana.addImage("image",bananaImage);
    banana.velocityX=-5;
    banana.lifetime=160;
    banana.scale=0.1;
    
    foodGroup.add(banana);
  }
  
}




