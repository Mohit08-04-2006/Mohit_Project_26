class Paper{
    constructor(){
        var wasteOption = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
    
        }

     this.body = Bodies.circle(40,590,50,wasteOption);
     this.image = loadImage("paper.png");
	 World.add(world,this.body);

    }

    display(){
        push();
        fill('red');
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      
    }
}