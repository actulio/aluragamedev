class InitialScreen {
	constructor(){
		this.bgImages = [];
		this.background = [];
		this.startButton;
		this.customFont;
	}

	preload(pathsToImages){
		pathsToImages.forEach( s => this.bgImages.push(loadImage(s)));
		this.customFont = loadFont('../../assets/other/customFont.otf')
	}

	setup(velocities = [0]){
		velocities.forEach( (value, index ) => this.background.push( 
			new Scenery(this.bgImages[index], value)
		));
		this.startButton = new StartButton('Start Game', windowWidth / 2, windowHeight / 1.6);
	}

  _text() {
    fill(255);
    strokeWeight(2);
    stroke(245, 1);
    textAlign(CENTER);
    textFont(this.customFont);
    textSize(150);
    text('Tulia\'s', width / 2, height / 2);
    textSize(50);
    text('Adventures', width / 2, height / 2 + 10 );
    textFont('Georgia')
  }

	draw(){
		this.background.forEach(element => {
			element.show();
			element.move();
		});
		this._text();
		this.startButton.draw();
	}

}