
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustBin,Paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(500,700,1000,10);
dustBin= new dustbin(580,660,10,70);
dustBin1= new dustbin(625,690,100,10);
dustBin2= new dustbin(680,660,10,70);
Paper= new paper(400,350,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustBin.display();
  dustBin1.display();
  dustBin2.display();
  Paper.display();
  
  drawSprites();
 
}



