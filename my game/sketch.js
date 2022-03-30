var ground,football,player1,player2;
var player1Img,player2Img;
var bgImg,footballImg;
var edges;
var player1Score = 0;
var player2Score = 0;
var gameState = "start"
var rightgoal,leftgoal;


function preload(){
    bgImg = loadImage("bg.jpg");
    footballImg = loadImage("ball.png");
    player1Img = loadAnimation("player1.jpg","player1b.jpg","player1c.jpg","player1d.jpg","player1e.jpg","player1f.jpg","player1g.jpg","player1h.jpg");
    player2Img = loadAnimation("player2.jpg","player2b.jpg","player2c.jpg","player2d.jpg","player2e.jpg","player2f.jpg","player2g.jpg","player2h.jpg");

}

function setup(){
  createCanvas(800,500);
  ground = createSprite(400,250,10,10);
  ground.addImage(bgImg);

  football = createSprite(400,250,10,10);
  football.addImage(footballImg);
  football.scale = 0.1;
 
  player1 = createSprite(700,250,10,70);
  player1.addAnimation("running",player1Img);
  //player1.scale = 0.2;
  player2 = createSprite(100,250,10,70);
  player2.addAnimation("running", player2Img);
  //player2.scale = 0.2;

  rightgoal = createSprite(755,250,30,120);
  rightgoal.visible = false
  leftgoal = createSprite(45,250,30,120);
  leftgoal.visible = false

  edges =  createEdgeSprites();
  //createEdgeSprites();

  centreline = createSprite(400,250,5,500);
  centreline.visible = false


}

function draw(){  

  if(gameState === "start" && (player1Score<10 || player2Score<10)){

    if(keyDown("SPACE")){
      football.velocityY = -15;
      football.velocityX = 15;
      gameState = "play"
  }
  }

    background("green");
    //console.log(gameState);
    if(gameState==="play"){

    if(player1Score===10 || player2Score===10){
         gameState = "END"

}

      if(keyDown("UP")){
        player1.y = player1.y -7;
    }

    if(keyDown("DOWN")){
      player1.y = player1.y +7;
  }

  if(keyDown("LEFT")){
    player1.x = player1.x -7;
  
}
  if(keyDown("RIGHT")){
    player1.x = player1.x +7;
}

if(keyDown("W")){
  player2.y = player2.y -7;
}

if(keyDown("S")){
player2.y = player2.y +7;
}

if(keyDown("A")){
player2.x = player2.x -7;

}
if(keyDown("D")){
player2.x = player2.x +7;
}

if(football.x<0){
   football.x =400;
   football.y = 250;

   football.velocityX = 0;
   football.velocityY = 0;
    
   gameState = "start"

  //player1Score = player1Score +1
  
}

   if(football.isTouching(leftgoal)){
    player1Score = player1Score +1
    football.x = 400;
    football.y = 250;

    football.velocityX = 0;
    football.velocityY = 0;
     
    gameState = "start"

   }

   if(football.isTouching(rightgoal)){
    player2Score = player2Score +1
      football.x = 400;
      football.y = 250;
      football.velocityX = 0;
      football.velocityY = 0;

      football.velocityX = 0;
      football.velocityY = 0;
       
      gameState = "start"
   }



  if(football.x>800){
    football.x = 400;
    football.y = 250;

    football.velocityX = 0;
    football.velocityY = 0;
     
    gameState = "start"

    //player2Score = player2Score +1

  }

   }

  player1.bounceOff(edges[0]);
  player1.bounceOff(edges[1]);
  player1.bounceOff(edges[2]);
  player1.bounceOff(edges[3]);

  player2.bounceOff(edges[0]);
  player2.bounceOff(edges[1]);
  player2.bounceOff(edges[2]);
  player2.bounceOff(edges[3]);

  player1.bounceOff(centreline);
  player2.bounceOff(centreline);

  //football.bounceOff(edges[0]);
  //football.bounceOff(edges[1]);
  football.bounceOff(edges[2]); //top
  football.bounceOff(edges[3]); //down

  football.bounceOff(player1);
  football.bounceOff(player2);


  
 drawSprites();
 if(gameState==="start"){
  fill(0);
  textSize(15);
  text("PRESS SPACE TO START",320,220);
 }

 if(player1Score===10 && gameState==="END"){
  textSize(25);
  fill(0);
     text("Congratulations player1 have won the game",200,220);
}

if(player2Score===10 && gameState==="END"){
  textSize(25);
  fill(0);
  text("Congratulations player2 have won the game",200,220);
}

 textSize(20);
 stroke(3);
 fill("black")
 text(player1Score,410,50);

 textSize(20);
 stroke(3);
 fill("black")
 text(player2Score,370,50);

}
