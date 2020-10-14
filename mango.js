class Mango{
    constructor(x,y){
      var options={
          isStatic:true,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.x=x;
      this.y=y;   
      this.mango=Bodies.circle(this.x,this.y,70,options);
      
      this.r=70;
      World.add(world,this.mango);
      this.image=loadImage("images/mango.png");
    }
  display(){  
   var pos=this.mango.position;
    push(); 
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
   fill("white");

}
}