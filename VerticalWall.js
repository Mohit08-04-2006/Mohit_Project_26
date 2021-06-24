class VerticalWall{
    constructor(x,y){
        var wallOptions = {
            isStatic:true

        }

        this.body = Bodies.rectangle(x,y,10,125,wallOptions);
        World.add(world,this.body);
         
    }

    display(){
        push();
        strokeWeight(3);
        stroke('lightgrey');
        fill('lightgrey');
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,10,125);
        pop();

    }
}