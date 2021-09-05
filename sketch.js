var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var leafImg;
var orangeLeafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png")
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX


var apple
var leaf
var orangeLeaf


var select_sprites=Math.round(random(1,2,3))
console.log( select_sprites)
drawSprites();
if(frameCount % 80 == 0){
  if(select_sprites == 1){
    createApples()
    
  }
  else if(select_sprites == 2){
    createLeaves()
  }
  else {
    createOrangeLeaves()
  }

}

}


  function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage("app",appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;
  }

  function createLeaves(){
    leaf=createSprite(random(50,350),40,10,10);
    leaf.addImage("lea",leafImg);
    leaf.scale=0.07;
    leaf.velocityY=3;
    leaf.lifetime=150;
    }

  function createOrangeLeaves(){
      orangeLeaf=createSprite(random(50,350),40,10,10);
      orangeLeaf.addImage("orange",orangeLeafImg);
      orangeLeaf.scale=0.07;
      orangeLeaf.velocityY=3;
      orangeLeaf.lifetime=150;
      }




















