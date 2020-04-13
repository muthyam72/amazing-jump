const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var football;
var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var football_ball={
 restitution:1.4

    }
    football = Bodies.circle(200,200,40,football_ball); 
    World.add(world,football)

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    ellipseMode(RADIUS)
    ellipse(football.position.x,football.position.y,40,40);

    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}