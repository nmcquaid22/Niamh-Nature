
var ball;
var liquid;

function setup () {
    createCanvas(400,400);
    
    //_x,_y,_vx,_vy,_ax,_ay,_m
    ball = new Mover (200,200,2,2,0,0,5);
    //x,y,w,h,co
    liquid = new Liquid (100,100, 180,50,0);
    }
    

 function draw () {
     
     background(100);
     
     liquid.display();
     
     ball.update();
     ball.display();
     ball.checkEdges();
     
     if (liquid.contains(ball)) {
         console.log("ball hit!");
     }
         
     
 }

     
     
     
 