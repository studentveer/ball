
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ball,ground
var box1,box2,box3
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(500,580,1000,20)
box1=new Box(800,570,200,20)
box2=new Box(700,500,20,150)
box3=new Box(900,500,20,150)
ball=new Ball(200,200)
  
}


function draw() {

  background(0);
  Engine.update(engine)
ground.display()
box1.display()
box2.display()
box3.display()
ball.display()
fill("white")
text("Press Up Arrow Key MoVed the Ball IntO dustBin",100,100)
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}


