
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, block1,block2;
var angle1=90, angle2= 60, angle3=180;
var rotator1 ,rotator2, rotator3;
var particle1,particle2,particle3,particle4,particle5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var plane_options = {
		isStatic : true
	}

	var particle_options = {
		restitution : 0.4,
		friction : 0.02
	}

	particle1 = Bodies.circle(380,10,10,particle_options);
	World.add(world,particle1);
	particle2 = Bodies.circle(390,10,10,particle_options);
	World.add(world,particle2);
	particle3 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle3);
	particle4 = Bodies.circle(410,10,10,particle_options);
	World.add(world,particle4);
	particle5 = Bodies.circle(420,10,10,particle_options);
	World.add(world,particle5);

	plane = Bodies.rectangle(400,490,800,10,plane_options);
	World.add(world,plane);

	block1 = Bodies.rectangle(200,350,200,10,plane_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(600,350,200,10,plane_options);
	World.add(world,block2);

	rotator1 = Bodies.rectangle(400,200,150,10,plane_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(400,200,150,10,plane_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(400,200,150,10,plane_options);
	World.add(world,rotator3);


	Engine.run(engine);
  
}


function draw() {
  background("yellow");

  rectMode(CENTER);
  rect(plane.position.x,plane.position.y,800,10);
  rect(block1.position.x,block1.position.y,200,10);
  rect(block2.position.x,block2.position.y,200,10);
  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,10);
  pop();
  angle1 += 1.5;

  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,10);
  pop();
  angle2 += 1.7;

  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,10);
  pop();
  angle3 += 2.8;

  ellipseMode(RADIUS);
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);

  drawSprites();
 
}



