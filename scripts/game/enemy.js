class Enemy extends Animation {
	constructor(image, xPos, yPos, dy, spriteW, spriteH, proportion, velocity){
		super(image, xPos, yPos, dy, spriteW, spriteH, proportion);
		this.velocity = velocity;
	}
	move(){
		this.xPos = this.xPos - this.velocity;
		if(this.xPos < - width){
			this.xPos = width;
		}
	}
} 