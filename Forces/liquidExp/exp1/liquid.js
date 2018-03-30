
var Liquid = function (x,y,w,h,co){
	
    this.location = createVector(x,y);
	this.width = w;
	this.height = h;
	this.coefDrag = co;
    
    
    
    this.display = function(){
		fill(150);
		strokeWeight(0);
        rect(this.location.x,this.location.y,this.width,this.height);
		
	}
    
    
    this.contains = function(m) {
        return m.location.y > this.location.y && m.location.y < this.location.y + this.height && m.location.x > this.location.x && m.location.x < this.location.x +this.width;
        
    }
    
    this.calculateDrag = function (m) {
        
        var dragForce = liquid.calculateDrag(ball);
        ball.applyForce(dragForce);
    }
    
     
    
}