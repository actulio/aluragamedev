class Character extends Animation {
	constructor(image, xPos, yPos, dy, spriteW, spriteH, proportion){
		super(image, xPos, yPos, dy, spriteW, spriteH, proportion);

		this.yInit = height - this.spriteH/proportion - dy;
		this.yPos = this.yInit;
		this.gravity = 4;
		this.jumpVelocity = 0;
		this.jumps = 0;
	}

	jump(){
		if(this.jumps < 2){
			this.jumpVelocity = -40;
			this.jumps++;
			return true;
		}
		return false;
	}

	applyGravity(){
		this.yPos = this.yPos + this.jumpVelocity;
		this.jumpVelocity = this.jumpVelocity + this.gravity;
		if(this.yPos > this.yInit){
			this.yPos = this.yInit;
			this.jumps = 0;
		}
	}

	isColliding(enemy){
		const precision = 0.8;

		// noFill();
		// stroke(255, 204, 0);

		// rect(
		// 	this.xPos,
		// 	this.yPos - this.dy,
		// 	this.spriteW/this.proportion * precision,
		// 	this.spriteH/this.proportion * precision,
		// )
		// rect(
		// 	enemy.xPos,
		// 	enemy.yPos - enemy.dy,
		// 	enemy.spriteW/enemy.proportion * precision,
		// 	enemy.spriteH/enemy.proportion * precision,
		// )

		const collision = collideRectRect(
			this.xPos,
			this.yPos - this.dy,
			this.spriteW/this.proportion * precision,
			this.spriteH/this.proportion * precision,
			enemy.xPos,
			enemy.yPos - enemy.dy,
			enemy.spriteW/enemy.proportion * precision,
			enemy.spriteH/enemy.proportion * precision,
		);

		return collision;
	}

}