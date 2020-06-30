class Animation {
	constructor(image, xPos, yPos, dy, spriteW, spriteH, proportion){
		this.image = image;
		this.imgWidth = image.width;
		this.imgHeight = image.height;
		this.xPos = xPos;
		this.yPos = yPos;
		this.dy = dy;
		this.spriteW = spriteW;
		this.spriteH = spriteH;
		this.proportion = proportion;
		this.matrix = this.makeMatrix();
		this.currentFrame = 0;
	}

	show(){
		image(
			this.image, 
			this.xPos, 
			this.yPos - this.dy,
			this.spriteW/this.proportion,
			this.spriteH/this.proportion, 
			this.matrix[this.currentFrame][0],
			this.matrix[this.currentFrame][1],
			this.spriteW,
			this.spriteH
		);

		this.animate();
	}

	animate(){
		this.currentFrame++;
		if(this.currentFrame >= this.matrix.length - 1) {
			this.currentFrame = 0;
		}
	}

	makeMatrix(){
		let columns = this.imgWidth/this.spriteW;
		let lines = this.imgHeight/this.spriteH;
		let matrix = []; 

		for(let i = 0; i < lines; i++){
			for(let j = 0; j < columns; j++){
				matrix.push([ j*this.spriteW, i*this.spriteH]);
			}
		}

		return matrix;
	}
}