var road,leftBoundary,rightBoundary;
var runner,running;
var roadImg;
function preload(){
  roadImg = loadImage("path.png");
  runningImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
road=createSprite(200,200);
road.addImage(roadImg);
road.velocityY = 4;
road.scale=1.2;

//creating runner running
runner = createSprite(180,340,30,30);
runner.scale=0.08;
runner.addAnimation("JakeRunning",runningImg);
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  road.velocityY = 4;
  
  // runner moving on Xaxis with mouse
  runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  
  //code to reset the background
  if(road.y > 400 ){
    road.y = height/2;
  }
  
  drawSprites();
}
