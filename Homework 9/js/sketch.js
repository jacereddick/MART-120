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
    circle(250,140,175);
   
    // eyes
    strokeWeight(10);
    fill(0);
    point(200,115);
    point(285,115);

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
    rect(200,375,10,50);
    // right leg
    rect(290,375,10,50);
    
    fill(120);
    textSize(22);
    text("Jace Reddick",160,500 );
    text("Creative Coding",150,520 );

}