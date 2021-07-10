const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var players,playerBases,Computers,ComputerBases

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  //Create Player Base and Computer Base Object
playerBases = new PlayerBase(300,random(450,height-300),180,150)
players = new Player(285,playerBases.body.position.y-153,50,180)
ComputerBases = new ComputerBase(1300,random(450,height-100),180,150)
Computers = new ComputerPlayer(ComputerBases.body.position.x,ComputerBases.body.position.y-153,50,180)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerBases.display()
ComputerBases.display()
Computers.display()
players.display()
   //display Player and computerplayer


}
