class Character {
	constructor(image, totalW, totalH, spriteW, spriteH, proportion ){
		this.image = image;
		this.totalW = totalW;
		this.totalH = totalH;
		this.spriteW = spriteW;
		this.spriteH = spriteH;
		this.proportion = proportion;
		this.matrix = this.makeMatrix();
		this.currentFrame = 0;
	}

	show(){
		image(
			this.image, 0,
			height - this.spriteH/this.proportion,
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
		let columns = this.totalW/this.spriteW;
		let lines = this.totalH/this.spriteH;
		let matrix = []; 

		for(let i = 0; i < columns; i++){
			for(let j = 0; j < lines; j++){
				matrix.push([ j*this.spriteW, i*this.spriteH]);
			}
		}

		return matrix;
	}
}