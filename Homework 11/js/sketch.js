var myxmove = 500
var myymove = 10
var enemyxmove = 100
var enemyymove = 10
var liney = 500

var obstacleonex = 350
var obstacleoney = 250
var obstacletwox = 470
var obstacletwoy = 350

function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    background(192, 244, 250);
    textSize(22)
    text("Welcome to My Game", 190,20);


    // start line
     textSize(15);
     text("Start",280,45 );
     line(0, 45, 600, 45)



    // myguy
    fill(50, 168, 82);
    circle(myxmove,myymove, 25);
    
    if(myymove == liney)
    {
	 textSize(100);
	 tex("You win", 200, 300);	
    }
    else if(enemyymove == liney)
    {
	 textSize(100);
	 tex("You Lose", 200, 300);
     } 
  
   
    // enemy
    fill(207, 23, 41);
    circle(enemyxmove,enemyymove, 25);
    enemyymove+=1
    
 
    
    fill(120);
    textSize(15);
    text("Click D to go Right",350,550 );
    text("Click F to go Left",150,550 );
    text("Click J to go Down",250,580 );
    text("Click K to go Up",250,520 );




     // obstacle1
     line(obstacleonex, obstacleoney, obstacletwox, obstacletwoy)





     // finish line
     textSize(15);
     text("Finish",280,500 );
     line(0, liney, 600, liney)
}



function keyPressed()
{
     if (key == 'f')
	{
	   myxmove+=10;
	}
     else if (key == 'd')
	{
	   myxmove-=10
	}
     else if (key == 'j')
	{
	   myymove+=10;
	}
     else if (key == 'k')
	{
	   myymove-=10;
	}



}

