
# Vector Multiplication and Division.

[See the Code in action](sketch20.html)

In this sketch we explore the multiplication of a vector and when we are dealing with multiplication we generally mean scaling.

Taking our previous sketch and simply extending it, we use the mult function to multiplay the vectorLine value by 0.5
 
```js
function draw(){
    background(51);
    
    
    var mouse = createVector(mouseX, mouseY);
    var center = createVector(width / 2, height / 2);
    var vectorLine = mouse.sub(center);
    vectorLine.mult(0.5);
```
And if we were to divide it we would just change the mult to div, the code would look something like this:

```js
 var mouse = createVector(mouseX, mouseY);
    var center = createVector(width / 2, height / 2);
    var vectorLine = mouse.sub(center);
    vectorLine.div(0.5);
```