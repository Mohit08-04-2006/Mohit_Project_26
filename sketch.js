
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var wall1,wall2;
var paper;
var dustbin_img;

function preload(){
   //loading image
   dustbin_img = loadImage("dustbin.png");
	
}

function setup() {
	var canvas = createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	//Creating Bodies
  	ground = new Ground(width/2,600);
    paper = new Paper(40,590);
    wall1 = new VerticalWall(575,525,10,125);
    wall2 = new VerticalWall(725,525,10,125);
	
  	Engine.run(engine);
  
}

function draw() {
  background("lightgrey");
  Engine.update(engine);

  // creating Image of dustbin.
  imageMode(CENTER);
  image(dustbin_img,650,515,150,150);

  // Ground and Paper
  ground.display();
  paper.display();

  // Walls
  wall1.display();
  wall2.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
  // Allowing Paper ball to jump with a velocity.
 if (keyCode == UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});

 }

  // Allowing Paper ball to go into the dustbin after jump.
 if (keyCode == DOWN_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:200});
 }

}