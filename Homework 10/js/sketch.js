
var xstart = 250;
var ystart = 375;
var xspecial = 285;
var yspecial = 115;
var counter = 13;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(255,128,0);
    textSize(22)
    text("Built Different!", 170,20);

    // head
    fill(255, 204, 153);
    circle(xstart,140,175);
    if(xstart <= 400)
    {
    counter*=-1
    }
     xstart+=counter;
  
   
    // eyes
    strokeWeight(10);
    fill(0);
    point(200,115);
    point(xspecial,yspecial);
    
    // nose
    point(245,130);
    
    // mouth
    ellipse(245, 175, 60, 30)
    

    // hair
    ellipse(250,60,175,40)
    fill(44,100,19);
    // body
    fill(0, 255, 255);
    rect(200,225,100,150);
    
    // decoration
    fill(255,128,0);
    circle(250,270,50);
    // right arm
    fill(255, 204, 153);
    rect(300,235,50,10);
    // left arm
    rect(150,235,50,10);
    // left leg
    rect(200,ystart,10,50);
    if(ystart <= 475)
    {
    counter*=-1
    }
     ystart+=counter;
    // right leg
    rect(290,ystart,10,50);
    
    fill(120);
    textSize(22);
    text("Jace Reddick",160,500 );
    text("Creative Coding",150,520 );

}