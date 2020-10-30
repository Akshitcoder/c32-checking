const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var score=0


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  stand1 = new Stand(700,200,700,10);
 
  ground = new Ground(500, 400, 450, 10);
  block1 = new Block(400, 170, 30, 70);
  block2 = new Block(455, 170, 30, 70);
  block3 = new Block(510, 170, 30, 70);
  block4 = new Block(565, 170, 30, 70);
  block5 = new Block(620, 170, 30, 70);
  block6 = new Block(455, 100, 30, 70);
  block7 = new Block(510, 100, 30, 70);
  block8 = new Block(565, 100, 30, 70);
  block9 = new Block(510,20, 30, 70);

  polygon=Bodies.circle(30,200,20);
  World.add(world,polygon);

  slingShot=new SlingShot(polygon,{x:100,y:200});
}

function draw() {
  background('black');  
  textSize(20);
	fill("white");
  text("Score: " + score, 800, 50);

Engine.update(engine);
  


  
  
  ellipseMode(RADIUS);
  stand1.display();
 
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();   
  block6.display();
  block7.display();
  block8.display();
  block9.display();


  block1.score()
  block2.score()
  block3.score()
  block4.score()
  block5.score()
  block6.score()
  block7.score()
  block8.score()
  block9.score()

 
  ellipse(polygon.position.x,polygon.position.y,30,30);
  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
} 


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}