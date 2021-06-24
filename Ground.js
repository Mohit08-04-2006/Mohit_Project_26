class Ground{
    constructor(){
        var groundOption = {
            isStatic:true
        }
        
        this.body = Bodies.rectangle(width/2,600,800,20,groundOption);
	    World.add(world,this.body);
    }

    display(){
        fill('yellow');
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,800,20);
    }
}