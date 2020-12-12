
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  
	ground = new Ground(600,height,1200,20);

	//dustbin1=new Dustbin(570,610,25,100);
	//dustbin2=new Dustbin(750,610,25,100);
	dustbin3=new Dustbin(660,600,170,190);

	paper=new Paper(50,610,30);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  ground.display();

  //dustbin1.display();
  //dustbin2.display();
  dustbin3.display();

  paper.display();

  keyPressed();


}

function keyPressed(){

if (keyCode===UP_ARROW){

Matter.Body.applyForce (paper.body,paper.body.position,{x:-60,y:60})
}

if (keyCode===DOWN_ARROW){

	Matter.Body.applyForce (paper.body,paper.body.position,{x:60,y:60})
	}

}



