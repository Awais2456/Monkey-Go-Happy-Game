
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, bananaGroup
var FoodGroup, obstacleGroup
var score
var survivalTime=0
var GameState=0


function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20)
monkey.addAnimation('moving', monkey_running)
monkey.scale=0.1
  
ground=createSprite(400,350,900,10)
ground.velocityX= -4
console.log(ground.x)
  
  bananaGroup= new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(225)
  
  if(GameState===0){
     if(ground.x<0){
  ground.x=ground.width/2;
  }
  
  if(keyDown('space')){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY +0.8;
    
      survivalTime=Math.ceil(frameCount/frameRate())

    
  banana();
  obstacle();
  }
  
 
  
  monkey.collide(ground);
  
  
  stroke('white')
  textSize(20)
  fill('white')
  text('score: '+score, 500,50);
  
  stroke('black')
  textSize(20)
  fill('black')
text('survival Time:' +survivalTime, 100,50);

  
  if(monkey.isTouching(obstacleGroup)){
    GameState=1
    monkey.velocityY=0
    ground.velocityX=0
    obstacleGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1)
  }
  
  
  
drawSprites();
  }

 function banana(){
   if(frameCount%100===0){
  fruit = createSprite(400,20,20,20)
  fruit.addImage(bananaImage); 
  fruit.scale=0.1
  fruit.velocityX=-5
  fruit.y=Math.round(random(100,200))
  fruit.lifetime=50
     bananaGroup.add(fruit);
     }
 }
function obstacle(){
  if(frameCount%60===0){
  rock=createSprite(400,320,20,20)
  rock.addImage(obstacleImage)
  rock.velocityX=-5
  rock.scale=0.1
  rock.lifetime=100
    obstacleGroup.add(rock);
    }
}

















