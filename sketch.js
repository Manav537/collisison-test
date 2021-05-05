
var car,car2,car3,car4, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed = random(20,80);
  weight = random (400,1500);
  weight2 = random (400,1500);
  weight3 = random (400,1500);
  weight4 = random (400,1500);

  car = createSprite(50,50,40,10);
  car2 = createSprite(50,130,40,10);
  car3 = createSprite(50,210,40,10);
  car4 = createSprite(50,290,40,10);

  wall = createSprite(1250,50,20,40);
  wall2 = createSprite(1250,130,20,40);
  wall3 = createSprite(1250,210,20,40);
  wall4 = createSprite(1250,290,20,40);
  
  wall.shapeColor = (80,80,80);
  wall2.shapeColor = (80,80,80);
  wall3.shapeColor = (80,80,80);
  wall4.shapeColor = (80,80,80);

  speed = random(20,80);
  speed2 = random(20,80);
  speed3 = random(20,80);
  speed4 = random(20,80);


}

function draw() {
  background(255,100,100);

  car.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;


  if(wall.x-car.x < (car.width + car.width)/2  )
  {
     
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed *speed / 22509;
    if (deformation > 180)
    {

      car.shapeColor = color(255,0,0);
    }

    if (deformation < 180 && deformation > 100)
      {

         car.shapeColor = color(255,255,0);

      }

    if (deformation < 100)
    {

      car.shapeColor = color(0,255,0);

    }


  }

  
  if(wall2.x-car2.x < (car2.width + car2.width)/2  ){
     
    car2.velocityX = 0;
    var deformation = 0.5 * weight2 * speed2 *speed2 / 22509;
    if (deformation > 180)
    {

      car2.shapeColor = color(255,0,0);
    }

    if (deformation < 180 && deformation > 100)
      {

         car2.shapeColor = color(255,255,0);

      }

    if (deformation < 100)
    {

      car2.shapeColor = color(0,255,0);

    }

  }
  
  
  if(wall3.x-car3.x < (car3.width + car3.width)/2  ){
     
    car3.velocityX = 0;
    var deformation = 0.5 * weight3 * speed3 *speed3 / 22509;
    if (deformation > 180)
    {

      car33.shapeColor = color(255,0,0);
    }

    if (deformation < 180 && deformation > 100)
      {

         car3.shapeColor = color(255,255,0);

      }

    if (deformation < 100)
    {

      car3.shapeColor = color(0,255,0);

    }

  }

  
  if(wall4.x-car4.x < (car4.width + car4.width)/2  )
  {
     
    car4.velocityX = 0;
    var deformation = 0.5 * weight4 * speed4 *speed4 / 22509;
    if (deformation > 180)
    {

      car4.shapeColor = color(255,0,0);
    }

    if (deformation < 180 && deformation > 100)
      {

         car4.shapeColor = color(255,255,0);

      }

    if (deformation < 100)
    {

      car4.shapeColor = color(0,255,0);

    }

  }

  drawSprites();
}