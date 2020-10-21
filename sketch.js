
var invisibleblock,invisibleblockg;
var PLAY=1
var END=0
var gameState=PLAY
var ghost,ghostI,s;
var door,doorI,doorg;
var climber,climberI,climg;
var tower,towerI;
function preload(){
  ghostI=loadImage("ghost-standing.png")
  doorI=loadImage("door.png")
  towerI=loadImage("tower.png")
  climberI=loadImage("climber.png")
  s=loadSound("spooky.wav")
}
function setup(){
  createCanvas(600,600)
 tower=createSprite(300,300,600,600)
  tower.addImage(towerI)
  tower.velocityY=1
  
  ghost=createSprite(300,300,10,10)
  ghost.addImage(ghostI)
  ghost.scale=0.3              

  
  doorg=new Group()
  climg=new Group()
  invisibleblockg=new Group()
}
function draw(){
  
 
  background("blue")
  
  

if(gameState===PLAY) { 
  if(tower.y>600){
  tower.y=tower.width/2
}
  
  s.play()
  
if(keyDown("right")){
  ghost.x=ghost.x+2
}
  if(keyDown("left")){
  ghost.x=ghost.x-2
}
  if(keyDown("space")){
  ghost.velocityY=-5
}
  ghost.velocityY=ghost.velocityY+0.5
  spawndoors();
  
  if(climg.isTouching(ghost)){
    ghost.velocityY=0
  }
  if(invisibleblockg.isTouching(ghost)||ghost.Y>600){
    ghost.destroy()
    gameState=END
  }
  

  
  
  drawSprites();
}
  if(gameState===END){
    fill("white")
    textSize(30)
    text("gameOver",250,300)
  }
}


function spawndoors(){
  if(World.frameCount%200===0){
    door=createSprite(300,100,10,10)
    door.addImage(doorI)
    door.velocityY=1
    door.lifetime=800
    door.x=Math.round(random(200,400))
    doorg.add(door)
      ghost.depth=door.depth
    ghost.depth=ghost.depth+1
    
    climber=createSprite(300,170,10,10)
    climber.addImage(climberI)
    climber.x=door.x
    climber.velocityY=1
    climber.lifetime=800
    climg.add(climber)
     ghost.depth=climber.depth
    ghost.depth=ghost.depth+1
    
    
    invisibleblock=createSprite(280,175,10,10)
    invisibleblock.x=door.x
    invisibleblock.width=climber.width
     invisibleblock.velocityY=1
     invisibleblock.lifetime=800
    invisibleblock.visible=false
    invisibleblockg.add( invisibleblock)
  
    
    
  }
}