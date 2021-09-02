class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display(){
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("grey")
			rect(0,0,this.w, this.h);
			pop()
			
	}
};
