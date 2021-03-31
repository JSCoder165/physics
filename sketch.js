const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ground


function setup(){
    createCanvas(400, 400);
    engine = Engine.create();
world = engine.world;
var ground_options = {
    isStatic: true
}
ground = Bodies.rectangle(200, 380, 400, 400, ground_options);



var ball_options = {
    restitution: 1.0
}
object = Bodies.rectangle(200, 100, 20, 20, ball_options);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER)
    rect(ground.position.x, ground.position.y, 400, 20);
    rect(object.position.x, object.position.y, 20, 20);
 
    
}
