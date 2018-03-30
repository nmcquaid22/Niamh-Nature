
var mover=[];


function setup () {
    createCanvas(600,600);
    for (var i = 0; i < 20; i++){
    mover[i] = new Mover();
    }
    
}
 function draw () {
     
     background(100,15);
     for (var i = 0; i < 20; i++){
        mover[i].render();
        mover[i].update();
        mover[i].checkEdges();
    
     }
     
     
 }