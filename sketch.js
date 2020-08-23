
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5,ground,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

    //options.
  //bodies.
  ground = new Ground (400,100,600,20);
  ball1 = new Bob (100,400,25,90);
  chain1 = new Chain (ball1.body,ground.body,-100,0);
  ball2 = new Bob (200,400,25,90);
  chain2 = new Chain (ball2.body,ground.body,-50,0);
  ball3 = new Bob (300,400,25,90);
  chain3 = new Chain (ball3.body,ground.body,0,0);
  ball4 = new Bob (400,400,25,90);
  chain4 = new Chain (ball4.body,ground.body,50,0);
  ball5 = new Bob (500,400,25,90);
  chain5 = new Chain (ball5.body,ground.body,100,0);
 
  
	console.log(chain1);
}


function draw() {

  background(200);

	Engine.run(engine);
  rectMode(CENTER);
  //console.log(ball1);
  ground.display();
  ball1.display();
  chain1.display();
  ball2.display();
  chain2.display();
  ball3.display();
  chain3.display();
  ball4.display();
  chain4.display();
  ball5.display();
  chain5.display();
  drawSprites();
  }
  

function keyPressed() {
  console.log("hello1");
  if(keyCode === UP_ARROW){
    console.log("hello2");
    Body.applyForce(ball1.body,ball1.body.position,{x:-5000,y:-1000});
  }

}
