class RestartButton {
  constructor(text, x, y) {
    this.text = text
    this.x = x
		this.y = y
		this.button;
  }
  
  draw() {
		this.button = createButton(this.text);
    this.button.position(this.x - 120, this.y);
    this.button.addClass('action-button');
    this.button.mousePressed(() => this.restartGame())
  }
  
	restartGame(){
		this.button.remove();
		// this.button = null;
		g_isGameOver = false;
		loop();

	}
}