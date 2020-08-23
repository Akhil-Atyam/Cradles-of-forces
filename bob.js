class Bob{
  constructor(x,y,radius,angle){
      var options={
          //isStatic:false,
          restitution:1.2,
          friction:0,
          density:1.5,
          timeScale:0.01           }
      this.body = Bodies.circle (x, y,radius,options,angle)
      this.angle=angle
      this.radius= radius
      World.add (world, this.body)
  }
  display(){
      ellipseMode(RADIUS)
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(90);
      strokeWeight(5)
      stroke("green")
      fill("teal");
      ellipse(0,0,this.radius,this.radius)
      pop()
    }
}
