
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  bobDiameter=40;
  bobstartpositionx=width/2;
  bobstartpositiony=height/500;


	//Create the Bodies Here.
  bobObject1 = new Bob(width/2-80,height/4+500,bobDiameter);
	bobObject2 = new Bob(width/2-40,height/4+500,bobDiameter);
	bobObject3 = new Bob(width/2,height/4+500,bobDiameter);
	bobObject4 = new Bob(width/2+40,height/4+500,bobDiameter);
	bobObject5 = new Bob(width/2+80,height/4+500,bobDiameter);
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
  console.log(bobObject1);

    roof = new Roof(width/2,height/4,width/7,20);

	  rope1 = new Rope(bobObject1.body, roof.body, -80, 0);
    World.add(world, rope1);

    rope2 = new Rope(bobObject2.body, roof.body, -40, 0);
    World.add(world, rope2);

    rope3 = new Rope(bobObject3.body, roof.body, 00, 0);
    World.add(world, rope3);

    rope4 = new Rope(bobObject4.body, roof.body, +40, 0);
    World.add(world, rope4);

    rope5 = new Rope(bobObject5.body, roof.body, +80, 0);
    World.add(world, rope5);


	Engine.run(engine);
  
}


function draw() {

  background("green");

  roof.display(); 

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyforce(bobObject1.body, bobObject1.body.position,{x:-730,y:0});

	}
	
}
function drawLine(Constraint)
{
  bobBodyposition=Constraint.bodyA.position;
  roofBodyposition=Constraint.bodyB.position;
  roofBodyOffset=Contraint.pointB;
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);
}
