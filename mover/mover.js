
function Mover () {
    
    this.location = createVector(Math.floor(random(width))),
    (Math.floor(random(width)))
   
    this.velocity = createVector(3,6);
    this.acceleration = createVector(-0.1,0.5);
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(1);
    
    
    //within the update function add acceleration to velocity.
    this.update = function(){
        
        var mouse = createVector (mouseX, mouseY);
        
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        
        
        
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.normalize();
    }
    
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    
    this.render = function (){
     ellipse(this.location.x, this.location.y, 10,10);
     fill(this.r,this.g,this.b);
     noStroke();
    }
   
    
    
    this.checkEdges = function () {
        if (this.location.x < 0 || this.location.x > width){
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y < 0 || this.location.y > width){
            this.velocity.y = this.velocity.y * -1;
        }
        
    }
 
 }