
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//remove variables
var holder,ground;
var stand;


var polygon;
var slingShot;
var basket;
var target;
var win_text

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);

  //ground
  var ground_options={
    isStatic:true
      };
      ground = Bodies.rectangle(0,370,900,40,ground_options)
      World.add(world,ground);

      
  //target(make green)
  var target_option={
    'restitution':0.8,
      'friction':1.0,
      'density':1.0,
       
   
}
target = Bodies.rectangle(513,170,30,30,target_option);
World.add(world,target);
  


   //stand for target
   var stand_options ={
     isStatic: true
   };
  
  stand = Bodies.rectangle(500, 235 , 50, 135,stand_options);
  World.add(world, stand);

  
  //polygon holder with slings
  polygon = Bodies.circle(50,300,20);
  World.add(world,polygon);
  
  //slingshot
  slingShot = new Slingshot(this.polygon,{x:100,y:250});



}
function draw() {
  background(56,44,44); 
  Engine.update(engine)
  //text to show how to play again
text("Press The Space Bar to Play Again!",650 ,50);
  //win text(make invisible)
   win_text = text("YOU WIN!",100 ,500);
   win_text.visible=false;
//win condition

  /*if(target.isTouching(ground)){

    win()
  }*/
//rectMode(CENTER);
  //show ground
  rect(ground.position.x,ground.position.y,900,40);


  //show stand
  rect(stand.position.x,stand.position.y,50,135);


  //show target(make green)
  
  strokeWeight(4);
  stroke("green");
  fill(255);
rect(target.position.x,target.position.y,30,30);


  //display slingshot
  slingShot.display();
  
//ellipseMode(RADIUS)
  //show ball
  ellipse(polygon.position.x,polygon.position.y,20);


  

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
      target.x = 513
      target.y = 200
       win_text.visible = false;
  }
}
//win function
function win(){
win_text.visible = true;

}

