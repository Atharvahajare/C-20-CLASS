//creating two objects
var object1,object2

function setup() {
  createCanvas(800,400);
  object1 = createSprite(400, 200, 50, 50);
  object1.shapeColor = "blue";
  object2 = createSprite(200,200,50,50);
  object2.shapeColor = "red";
}

function draw() {
  background(255,255,255); 
  
  //writing algorithim for colliding object

  if(object1.x-object2.x < object1.width/2+object2.width/2 
    && object2.x-object1.x < object1.width/2+object2.width/2
    && object1.y-object2.y < object1.width/2+object2.width/2
    && object2.y-object1.y < object1.width/2+object2.width/2
    ){
    object2.shapeColor = "green";
    object1.shapeColor = "green";
  }

  else{
    object2.shapeColor = "yellow";
    object1.shapeColor = "yellow";
  }

  //control the object
  object2.x = World.mouseX;
  object2.y = World.mouseY;
  drawSprites();
}