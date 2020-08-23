class Chain {
    constructor(BodyA,BodyB,offA,offB){
        this.offsetX = offA;
        this.offsetY = offB;
        var opt = {
            bodyA:BodyA,
            bodyB:BodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            length:250,
            stiffness:0
        }
        
        this.chain = Constraint.create(opt);
        World.add(world,this.chain)
    }
    display(){
        push();
        strokeWeight(5);
        stroke(51, 26, 0);
        
        var Anchor1X = this.chain.bodyA.position.x;
		var Anchor1Y = this.chain.bodyA.position.y;
        
        var Anchor2X = this.chain.bodyB.position.x + this.offsetX;
        var Anchor2Y = this.chain.bodyB.position.y + this.offsetY;
        
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);


        pop();
    }
}