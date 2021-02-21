
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone(100,100,50,50)
hammer = new Hammer(200,100,200,50)
ground = new Ground(400,680,800,20)
rubber = new Rubber (300,100,50 )
iron = new Iron(400,100,100,100)
sand = new Sand(100,350)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display()
  iron.display()
  rubber.display()
  hammer.display()
  sand.display()
  ground.display()
  drawSprites();
 
}



