class Fly {

constructor(bodyA,pointB){
var options = {bodyA:bodyA,pointB:pointB,stiffness:0.4};
this.body  = Constraint.create(options);
this.pointB = pointB;
World.add(world,this.body);



}
blow(){
    this.body.bodyA = null; 
 
 }
display(){
var pointA = this.body.bodyA.position;
var pointB = this.pointB;
strokeWeight(0);

line(pointA.x,pointA.y,pointB.x,pointB.y);



}



}