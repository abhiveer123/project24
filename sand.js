class Sand {
  constructor(x, y) {
    var options = {
        'restitution':1.3,
        'friction':5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 5, options);
   
    this.radius=5;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    stroke(0)
    fill("red");
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
};
