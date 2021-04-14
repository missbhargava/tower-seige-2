class Blocks {
    constructor(x, y, width, height) {
      var options = {
          isStatic :false,
          'restitution':0.8,
          'friction':1.5,
          'density':1
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.Visiblity=255
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed<3){
        var angle= this.body.angle
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width, this.height)
        pop()
      }
      else{
        World.remove(world, this.body)
        push()
        this.Visiblity= this.Visiblity-0.05
        tint (255,this.Visiblity)
       
        pop()
      }
      
    }
  
  }

  