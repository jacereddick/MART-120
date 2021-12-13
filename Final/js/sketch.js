

function setup()
{
    createCanvas(1600, 700);
}

function draw()
{
    background(255,128,0);
    textSize(40)
    fill(255,255,255)
    text("Perry the Platypus", 500,650);
    textSize(20)
    text("Jace Reddick - Final", 570,680)





    // feet
    fill(252, 147, 0)
    rect(350,530,100,10)

    fill(0, 255, 255)
    rect(900,530,30,10)





    // legs
    fill(0, 255, 255)
    rect(350,450,40,80);
    rect(900,450,20,80);
 

    // eye
    fill(255,255,255)
    ellipse(1000,330,80,60)
    
    fill(97, 73, 39)
    ellipse(1020,330,30,20)

    fill(255, 255, 255)
    ellipse(1025,327,10,5)

    //Beak
    fill(252, 147, 0)
    triangle(1000,450,1050,450,1000,380)
    ellipse(1000,425,300,50)


    // tail
    fill(252, 147, 0)
    triangle(310,400,50,360,80,230)


    // Body
    fill(0, 255, 255);
    rect(300,280,700,170);

   

    // hair
    fill(0,0,0)
    line(970,280,1000,230)
    line(970,280,1020,230)
    line(970,280,980,230)




    // eye
    fill(255,255,255)
    ellipse(920,330,80,60)


    fill(97, 73, 39)
    ellipse(920,330,30,20)
   

    fill(255, 255, 255)
    ellipse(920,329,10,5)

  
    
    





}