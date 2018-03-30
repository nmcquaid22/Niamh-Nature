# Probability & Non Uniform Distributions

Implementing probability with the random()


[See the Code in action](sketch05.html)

In this file we are testing probability alongside the random function.

This is another way of doing it. r is a floating number between 0 and 1. Once the step function is called, through the if and else statements, if the floating value stored in r is less that the given value then it is either added or subtracted from the x or y value.

```js

this.step = function() {
   this.step = function() {
        var choice = floor(random(4));
        var r = random(1);
         // a 40% of moving to the right
        if (r < 0.4) {
            this.x++;
        } else if (r < 0.6) {
            this.x--;
        } else if (r < 0.8) {
            this.y++;
        } else {
            this.y--;
        }
        
        this.x = constrain(this.x,0,width -1);
        this.y = constrain(this.y,0,height -1);
    }
    
```