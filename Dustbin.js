class Dustbin {
    constructor(x,y,width,height) {
      this.image=loadImage("sprites/dustbingreen.png");
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      this.image=loadImage("sprites/dustbingreen.png"); 
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
    
      image(this.image,660,600, this.width,this.height);
    }
  };
