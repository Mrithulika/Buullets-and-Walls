var wall;
var Wallthikness;
var bullet;
var bulletSpeed,bulletWeight;
var deformation;



function setup() {
  var canvas = createCanvas(1600,400);
  

  Wallthikness = random(22,83)
  bulletSpeed = random(55,90)
  bulletWeight = random(30,52)
  
  wall = createSprite(1200,200,Wallthikness,200)
  bullet = createSprite(0,200,15,15)
  bullet.velocityX=bulletSpeed
  deformation =  (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(Wallthikness*Wallthikness*Wallthikness)  
}

function draw() {
background(0);

    
wall.shapeColor = color(80,80,80)
bullet.shapeColor = color(80,80,80)

if( wall.x-bullet.x <= (wall.width+bullet.width)/2 ){
  
bullet.velocityX = 0  
  
if(deformation > 10){
 wall.shapeColor = color(255,0,0)
 bullet.shapeColor = color(0,255,0)
}

if(deformation < 10){
  wall.shapeColor = color(0,255,0)
  bullet.shapeColor = color(255,0,0)
}

} 

drawSprites();

}







 