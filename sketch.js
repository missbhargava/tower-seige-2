
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(450,520,300,10)
	ground2= new Ground(610,240,250,10)

	//Create the Bodies Here.
	b1= new Blocks(350,500,30,40)
	b2= new Blocks (383,500,30,40)
	b3= new Blocks(416,500,30,40)
	b4= new Blocks(449,500,30,40)
	b5= new Blocks(482,500,30,40)
	b6= new Blocks(515,500,30,40)
	b7= new Blocks(548,500,30,40)

	b8= new Blocks (383,459,30,40)
	b9= new Blocks (416,459,30,40)
	b10= new Blocks (449,459,30,40)
	b11= new Blocks (482,459,30,40)
	b12= new Blocks (515,459,30,40)

	b13 = new Blocks(416,418,30,40)
	b14 = new Blocks(449,418,30,40)
	b15 = new Blocks(482,418,30,40)

	b16 = new Blocks(449,377,30,40)

	b17= new Blocks(550,220,30,40)
	b18= new Blocks(583,220,30,40)
	b19= new Blocks(616,220,30,40)
	b20= new Blocks(649,220,30,40)
	b21= new Blocks(682,220,30,40)

	b22= new Blocks(583,179,30,40)
	b23= new Blocks(616,179,30,40)
	b24= new Blocks(649,179,30,40)

	b25= new Blocks(616,139,30,40)

	

	

	
	
 

polygon = new Polygon(300,200,50)
 slingshot = new Slingshot (polygon.body,{x:300, y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  fill("palevioletred")
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  fill("aquamarine")
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  fill("mediumorchid")
  b13.display()
  b14.display()
  b15.display()
  fill("chartreuse")
b16.display()
ground.display()
fill("palevioletred")
b17.display()
b18.display()
b19.display()
b20.display()
b21.display()
fill("mediumorchid")
b22.display()
b23.display()
b24.display()
fill("aquamarine")
b25.display();
ground2.display();

polygon.display()
slingshot.display();

  

 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



