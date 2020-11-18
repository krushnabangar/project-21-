var bullet, wall;
var thikckness,speed , weight;

function setup() {
  
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(400,1500);
  thickness = random(30,52);
  
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
 
  background(0);  
  
if(wall.x - bullet.x <bullet.width/2 + wall.width/2 ){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness) ;

  if(damage > 10){
    wall.shapeColor = color(255,0,0);

  }
  if(damage < 10){
    wall.shapeColor = color(0,255,0);
    
  }

  if(damage > 10  && damage < 10){
    wall.shapeColor = color(230,230,0);
    
  }
  
}
  
function hasCollided(b1,w1)
{
   bulletRightEdge = b1.x + b1.width;
   wallLeftEdge = w1.x;
   if (b1RightEdge >= w1LeftEdge)
   {
     return true
   }
    return false
}


 
  drawSprites();
}

