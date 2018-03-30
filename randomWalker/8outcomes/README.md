# Random Walker with 8 Outcomes

[See the Code in action](index.html)

In this file, again we create a Walker class which creates walker objects. Each time the step function is called on this object it selects a random number between 0-8 and based on that it produces 9 outcomes, including standing still. 

The only difference in this .js file in comparison to the other is there is a change in the step function.

```js
 this.step = function() {
        var stepx = floor(random(-1,2));
        var stepy = floor(random(-1,2));
        
        this.x = this.x + stepx;
        this.y = this.y + stepy;
        
        
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }

```
This step function picks a random number between -1 and 2 on each the x and the y direction and then we floor it. So for example 1.9 would be 1.
Its then added to the x and y and once again the constrain function is implemented to constrain a value to not exceed a maximum and minimum value.