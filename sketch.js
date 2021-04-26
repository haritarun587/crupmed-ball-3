const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world,dustbin,paper;
var ground,ball;
var binImg,bin;

function preload()
{
	binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground();
	crumpledpaper = new Paper();

	bin = createSprite(964,520,20,20);
	bin.addImage(binImg);
	bin.scale = 0.45;

	binPart1 = new Dustbin(902,505,10,120);
	binPart2 = new Dustbin(962,565,130,10);
	binPart3 = new Dustbin(1024,505,10,12);	
   }


function draw() {
	Engine.update(engine);
  background(0);
 
 ground.display();
 crumpledpaper.display();
 binPart1.display();
 binPart2.display();
 binPart3.display();
 
    drawSprites();

}


function Keypressed(){
	if (keyCode  === UP_ARROW){
		Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position);
		
		}
	}

function mouseDragged(){
	matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	paper.fly();
}
