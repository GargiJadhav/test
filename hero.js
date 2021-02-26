class Hero{
    constructor(x,y,radius){
        var option = {isStatic:false}
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        this.image = loadImage("images/Superhero-02.png")
        World.add(world,this.body);
    }
    display(){
var pos = this.body.position;
        //ellipse(this.image,pos.x,pos.y,this.radius);
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}