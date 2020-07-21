class Life {
	constructor( max, initial, heart) {
		this.max = max;
		this.initial = initial;
		this.current = initial;
		this.width = 50;
		this.height = 50;
		this.heart = heart;
	}

	show(){
		for(let i = 0; i < this.current; i++){
			const margin = i * 10;
			image(this.heart, this.width*(i+1) + margin, 10, this.width, this.height);
		}
	}

	gainLife(){
		this.current = this.current <= this.max ? this.current + 1 : this.current;
	}

	loseLife(){
		this.current = this.current > 0 ? this.current - 1 : this.current;
	}

	getCurrent(){
		return this.current;
	}

	resetLives(){
		this.current = this.max;
	}

}