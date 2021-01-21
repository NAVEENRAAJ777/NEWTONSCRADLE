
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground=new ground(350,300,300,20)
	ball1=new ball(225,540)
	rope1=new Chain(Ground.body,ball1.body)

    ball2=new ball(225,540)
	rope2=new Chain(Ground.body,ball2.body)

	ball3=new ball(225,540)
	rope3=new Chain(Ground.body,ball3.body)

	ball4=new ball(225,540)
	rope4=new Chain(Ground.body,ball4.body)

	ball5=new ball(225,540)
	rope5=new Chain(Ground.body,ball5.body)





	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  Ground.display();
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();

  stroke("red")
  strokeWeight(2)
  textSize(20)
  text("Additional goal PRESS left arrow",200,230)
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-258,y:0})
	}
}


