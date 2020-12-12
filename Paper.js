class Paper {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }

      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
         
      this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      
      

      image(this.image,pos.x,pos.y ,this.radius);
     
     
  
     
    }
  };
  