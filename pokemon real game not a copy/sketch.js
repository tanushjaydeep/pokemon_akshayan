var player,bg;

function preload(){

bg=loadImage("img/map.png");
playerimg=loadImage("img/player.png");

}

function setup(){
  createCanvas(displayWidth,displayHeight)
    bgv=createSprite(displayWidth/2,displayHeight/2,1000,1000)
    bgv.addImage(bg)
player=createSprite(480,270)
player.addImage(playerimg)
player.scale=0.5;
bgv.scale=3
//trees1=createSprite(2468,1370,26,200);
}

function draw(){
background(0);
//image(bg,0,-5000,displayWidth,10000)
//console.log("x="+bgv.x)   
//console.log("y="+bgv.y)   
//console.log("x="+mouseX)   
//console.log("y="+mouseY)  
//console.log("tx="+trees1.x)   
//console.log("ty="+trees1.y)  k 
camera.position.x=displayWidth/2
camera.position.y=player.y


                           
if (keyDown("UP_ARROW")){
                    
 player.y=player.y-20;
                                    
 }
 if (keyDown("DOWN_ARROW")){
                                    
     player.y=player.y+20;
    
        }
     if (keyDown("LEFT_ARROW")){
                                    
         player.x=player.x-20;
                                            
         }
         if (keyDown("RIGHT_ARROW")){
                                                
             player.x=player.x+20;}
    


drawSprites();

}