let img_scenery;
let img_character;
let img_gameover;

let scenery;
let gameSound;
let jumpSound;
let character;
let score;


let img_enemies = [];
let enemies = [];
let img_background = [];
let background = [];

function preloadImages(toArray = [], pathsToImage = []){
	pathsToImage.forEach( s => toArray.push(loadImage(s)));
}

function createBgLayers(){
	background.push(new Scenery(img_background[0], 0));
	background.push(new Scenery(img_background[1], 0.2));
	background.push(new Scenery(img_background[2], 0.5));
}

function paintBgLayers(){
	background.forEach(element => {
		element.show();
		element.move();
	});
}


function preload(){
	img_character = loadImage('./images/character/running.png');
	img_gameover = loadImage('./images/assets/game_over.png');
	gameSound = loadSound('./sounds/soundtrack.mp3');
	jumpSound = loadSound('./sounds/jumpSound.mp3');

	preloadImages(img_background, [
		'/images/background/used/sky_n_rocks.png',
		'/images/background/used/clouds_1_n_2.png',
		'/images/background/used/ground_all.png'
	]);

	preloadImages(img_enemies, [
		'/images/enemies/droplet.png',
		'/images/enemies/droplet_flying.png',
		'/images/enemies/troll.png'
	])

	frameRate(30);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	enemies.push( new Enemy(img_enemies[0], width - 52, height - 52, 30, 104, 104, 2, 10 ));
	// enemies.push( new Enemy(img_enemies[1], width - 52, height - 52, 250, 200, 150, 2, 10 ));
	character = new Character(img_character, 0, height - 135, 10, 220, 270, 2 );
	score = new Score(0);

	createBgLayers();
	gameSound.loop();
}

function draw() {

	paintBgLayers();

	score.show();
	score.addScore();
	character.show();
	character.applyGravity();
	enemies[0].show();
	enemies[0].move();

	if(character.isColliding(enemies[0])){
		console.log("collided");
		image(img_gameover, windowWidth/2 - img_gameover.width/2, windowHeight/2 - img_gameover.height/2);
		noLoop();
	}
}

function keyPressed() {
	console.log(key);
	if (key === 'ArrowUp') {
		if (character.jump()) {
			jumpSound.play();
		}
	}
}

