class Tree{
    constructor(x,y){

      this.x=x;
      this.y=y;
      this.tree=Bodies.rectangle(this.x,this.y,100,250,{isStatic:true});

      
      World.add(world,this.tree);
      this.image=loadImage("images/tree.png");
    }
  display(){  
   
   var pos = this.tree.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,-90,320,600);
    pop();
   fill("white");

}
}