class Ball {
    constructor(x,y){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.r=30;
        this.body=Bodies.circle(x,y,30,option)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        fill("yellow")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}