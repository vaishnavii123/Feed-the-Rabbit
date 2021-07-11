var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;


function preload(){
gardenImg = loadImage("garden.png");
rabbitImg = loadImage("rabbit.png");
appleImg=loadImage("apple.png");
leafImg=loadImage("orangeLeaf.png");
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
rabbit.velocityY=-4;

}


function draw() {
  background(0);

  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnapples();

  spawnleaves();

  
  drawSprites();
}

function spawnapples(){
if(frameCount % 80===0){
var apple=createSprite(40,50,15,15);
apple.addImage(appleImg);
apple.x = Math.round(random(10,350));
apple.scale=0.07;
apple.velocityY=4;
apple.lifetime=250;
}
}

function spawnleaves(){
if(frameCount % 60===0){
var leaf=createSprite(30,70,13,13);
leaf.addImage(leafImg);
leaf.x = Math.round(random(10,350));
leaf.scale=0.09;
leaf.velocityY=4;
leaf.lifetime=150;
}
}
