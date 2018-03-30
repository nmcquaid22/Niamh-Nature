# Probability & Non Uniform Distributions

Implementing probability with the random()


[See the Code in action](sketch04.html)

In this file we are testing probability alongside the random function.

We create a function walker. Within that function we use the step function. A variable called index is created which stored the random chosen floored number between 0-5. that floored number then is used to pick which number in the array is chose. This value is then stored in a variable called r.

There is a 40% chance that that 1 or 3 will get picked and a 20% chance that 2 will get picked.

```js

this.step = function() {
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;
        
        var index = floor(random(probArray.length));
        var r = probArray[index];
        
        this.x = constrain(this.x,0,width -1);
        this.y = constrain(this.y,0,height -1);
    }
    
```


