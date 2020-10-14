
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var tree,ground; 
var boyimg,boy;
var mango1, mango2, mango3, mango4, mango5;
//var Gamestate=0;
var  slingshot;
var stone;

function preload()
{
	boyimg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground= new Ground(400,height,800,20);

  boy=createSprite(200,620,30,20);
  boy.addImage(boyimg);
  boy.scale=0.12;

stone= new Stone(140,540);

slingshot=new Slingshot(stone.body,{x: 140 , y: 540});

 tree= new Tree(600,500);

  mango1= new Mango(600,300);

  mango2= new Mango(490,300);

  mango3= new Mango(550,200);
  
  mango4= new Mango(640,200);

  mango5= new Mango(690,300);

  mango6= new Mango(600,400);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white"); 
  
  tree.display();
  mango1.display(); 
  mango2.display();
  mango3.display(); 
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  slingshot.display();
  stone.display();
  
  drawSprites();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  

}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function detectCollision(lstone,lmango){

   mangoBodyPosition=lmango.mango.position;
   stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
 if(distance<=lmango.r+lstone.r) { 
  Matter.Body.setStatic(lmango.mango,false);
 }
 }
function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:140, y:540})
		slingshot.attach(stone.body);
	}
}
