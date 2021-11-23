
var characterX = 100;
var characterY = 100;



var w = 87; 
var s = 83;
var a = 65;
var d = 68;


var shapeX = 40;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;


var mouseShapeX;
var mouseShapeY;


function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
    background(32, 231, 245);
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorders(5);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // enemy
    fill(245, 128, 32);
    // enemy shape
    circle(shapeX, shapeY, 10);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;


    // Out of Bounds?
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    if(characterX > width && characterY > width-50)
    {
        fill(245, 128, 32);
        stroke(5);
        textSize(26);
        text("Dub!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(245, 25, 5);
    circle(mouseShapeX, mouseShapeY, 25);
}



function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}


function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character
    
   // circle(characterX,characterY,25);
}




function drawCharacter()
{
    fill(255, 255, 255);
    circle(characterX,characterY,25);
}



function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}




function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}