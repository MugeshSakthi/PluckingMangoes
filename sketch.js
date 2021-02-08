
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var rock,rope;
var rock;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1000,100,30);
  mango3=new mango(940,150,30);
  mango4=new mango(900,200,30);
  mango5=new mango(1050,200,30);
  mango6=new mango(1140,150,30);
  mango7=new mango(1150,200,30);
  mango8=new mango(1250,200,30);
  rock=new stone(600,400,30);
  rope=new string(rock.body,{x:600,y:400}); 

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  Engine.update(engine);
  
  detectc(rock,mango1);
  detectc(rock,mango2); 
  detectc(rock,mango3);
  detectc(rock,mango4);
  detectc(rock,mango5);
  detectc(rock,mango6);
  detectc(rock,mango7);
  detectc(rock,mango8);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  rock.display();
  groundObject.display();

}

function detectc(stones,mangoes){

if(stones.body.position.x-mangoes.body.position.x<mangoes.radius*2-stones.radius*2
  && mangoes.body.position.x-stones.body.position.y<mangoes.radius*2-stones.radius*2
  &&stones.body.position.y-mangoes.body.position.y<mangoes.radius*2-stones.radius*2
  && mangoes.body.position.y-stones.body.position.y<mangoes.radius*2-stones.radius*2){
  Matter.Body.setStatic(mangoes.body,false);
}

}

function mouseDragged(){

Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

rope.fly();

}


