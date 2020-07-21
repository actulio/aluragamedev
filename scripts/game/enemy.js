class Enemy extends Animation {
	constructor(image, xPos, yPos, dy, spriteW, spriteH, proportion, velocity){
		super(image, xPos, yPos, dy, spriteW, spriteH, proportion);
		this.velocity = velocity;
	}
	move(){
		this.xPos = this.xPos - this.velocity;
		if(this.xPos < - width / 4){
			this.xPos = width;
		}
	}
	getxPos(){
		return this.xPos;
	}
	getSpriteW(){
		return this.spriteW;
	}
	getProportion(){
		return this.proportion;
	}
	resetxPos(){
		this.xPos = width;
	}
	setVelocity(velocity){
		this.velocity = velocity;
	}
} 