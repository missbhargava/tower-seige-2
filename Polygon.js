class Polygon {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
          
      }
      this.polygon_img= loadImage("polygon.png")
      this.body = Bodies.circle(x, y,radius, options);
     this.radius= radius
      
      World.add(world, this.body);

     
     
    }
    display(){
      var pos =this.body.position;

        
      var angle=this.body.angle
      push ()
   
     
       imageMode(CENTER);
      
      image(this.polygon_img,pos.x,pos.y, this.radius,this.radius);
       pop ()
     
     
    
    }
  }