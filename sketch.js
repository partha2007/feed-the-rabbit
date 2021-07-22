var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesImg;
var leaf,leafImg;
var orangeleaf,orangeleafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
 orangeleafImg = loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
 rabbit.x=World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();

  spawnleaf();

  spawnorangeleaf();

  drawSprites();
}


function spawnApples(){

if (frameCount  % 60 === 0){
apple = createSprite(200,20,20,20);
apple.addImage(applesImg);
apple.scale=0.09;
apple.x=Math.round(random(20,340))
apple.velocityY=4
apple.lifetime=80
}


}


function spawnleaf(){

  if (frameCount  % 60 === 0){
  leaf= createSprite(150,20,20,20);
  leaf.addImage(leafImg);
  leaf.scale=0.09;
  leaf.x=Math.round(random(20,340))
  leaf.velocityY=4
  leaf.lifetime=100
  
  }
  }


  function spawnorangeleaf(){

    if (frameCount  % 60 === 0){
    orangeleaf= createSprite(20,150,20,20);
    orangeleaf.addImage(orangeleafImg);
    orangeleaf.scale=0.09;
    orangeleaf.x=Math.round(random(20,340))
    orangeleaf.velocityY=4
    orangeleaf.lifetime=100
    
    }
    }



  
  
  
