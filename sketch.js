const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine;
var world,superhero,ground,block1;
var backgroundImg;
function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1200, 600);
  // create sprites here
engine = Engine.create();
world = engine.world;
block1 =new Block(1000,100,10,10);
superhero = new Hero(20,200,220,220);
ground = new Ground(20,400,1000,10);
fly = new Fly(superhero.body,{x:200,y:100});

}

function draw() {
  background(backgroundImg);
  block1.display();
superhero.display();
fly.display();

ground.display();

}

function mouseDragged(){

  Matter.Body.setPosition(superhero.body,{x: mouseX , y:mouseY});

}
function mouseReleased(){
fly.blow();

}
