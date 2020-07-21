let dYHeart; 

class Character extends Animation {
	constructor(image, heart, xPos, yPos, dy, spriteW, spriteH, proportion){
		super(image, xPos, yPos, dy, spriteW, spriteH, proportion);

		this.yInit = height - this.spriteH/proportion - dy;
		this.yPos = this.yInit;
		this.gravity = 4;
		this.jumpVelocity = 0;
		this.jumps = 0;
		this.isInvulnerable = false;
		this.heart = heart;
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

	setInvulnerable(){
		this.isInvulnerable = true;
		setTimeout(() => {
			this.isInvulnerable = false;
		}, 1000);
	} 

	isColliding(enemy, charPrecision, enemyPrecision){

		if(this.isInvulnerable){
			image(
				this.heart, 
				this.xPos + (this.spriteW/this.proportion)/2 - 10, 
				this.yPos - this.dy - 10 - dYHeart,
				20, 20
			);
			dYHeart = dYHeart + 5;
			
			return false;
		}

		dYHeart = 0;

		noFill();
		stroke(255, 204, 0);

		// rect(
		// 	this.xPos + (100 - charPrecision[0]*100),
		// 	(this.yPos - this.dy) - ((charPrecision[1])*100 - 100),
		// 	this.spriteW/this.proportion * charPrecision[0],
		// 	this.spriteH/this.proportion * charPrecision[1],
		// )
		// rect(
		// 	enemy.xPos + (100 - enemyPrecision[0]*100),
		// 	(enemy.yPos - enemy.dy) - ((enemyPrecision[1])*100 - 100 ),
		// 	enemy.spriteW/enemy.proportion * enemyPrecision[0],
		// 	enemy.spriteH/enemy.proportion * enemyPrecision[1],
		// )

		const collision = collideRectRect(
			this.xPos + (100 - charPrecision[0]*100),
			(this.yPos - this.dy) - ((charPrecision[1])*100 - 100),
			this.spriteW/this.proportion * charPrecision[0],
			this.spriteH/this.proportion * charPrecision[1],

			enemy.xPos + (100 - enemyPrecision[0]*100),
			(enemy.yPos - enemy.dy) - ((enemyPrecision[1])*100 - 100 ),
			enemy.spriteW/enemy.proportion * enemyPrecision[0],
			enemy.spriteH/enemy.proportion * enemyPrecision[1],
		);

		return collision;
	}

}