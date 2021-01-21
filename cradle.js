class ball{
    constructor(x,y){
   var option={
       restitution:0.6,
       friction:0.7,
        density:1.2   
    }
    this.body=Bodies.circle(x,y,40,option);
    this.radius=90;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("pink");
        fill("yellow");
        circle(0,0,this.radius)
        pop();
    }
}