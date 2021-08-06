const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function preload() {
polygonImg=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,300,180,20);
    ground2 = new Ground(1000,210,150,20)

    box1 = new Box(540,280,30,40)
    box2 = new Box(570,280,30,40)
    box3 = new Box(600,280,30,40)
    box4 = new Box(630,280,30,40)
    box5 = new Box(660,280,30,40)

    box6 = new Box(555,240,30,40)
    box7 = new Box(585,240,30,40)
    box8 = new Box(615,240,30,40)
    box9 = new Box(645,240,30,40)

    box10 = new Box(570,200,30,40)
    box11 = new Box(600,200,30,40)
    box12 = new Box(630,200,30,40)
    
    box13 = new Box(585,160,30,40)
    box14 = new Box(615,160,30,40)
    
    box15 = new Box(600,120,30,40)

    box16 = new Box(955,190,30,40)
    box17 = new Box(985,190,30,40)
    box18 = new Box(1015,190,30,40)
    box19 = new Box(1045,190,30,40)

    box20 = new Box(970,150,30,40)
    box21 = new Box(1000,150,30,40)
    box22 = new Box(1030,150,30,40)

    box23 = new Box(985,110,30,40)
    box24 = new Box(1015,110,30,40)

    box25 = new Box(1000,70,30,40)

    var options = {
    density:0.5
    }
    polygon = Bodies.circle(50,500,20,options);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:150, y:200});
}

function draw(){
    text("SCORE : "+score,110,40);
    text.color="white";
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if (keyCode===32) {
      slingshot.attach(this.polygon);
    }
}
