let imageScenery;
let imageCharacter;
let scenery;
let gameSound;
let character;

function preload(){
	imageScenery = loadImage('./images/scenery/forest.png');
	imageCharacter = loadImage('./images/character/running.png');
	gameSound = loadSound('./sounds/soundtrack.mp3');
	frameRate(40);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	scenery = new Scenery(imageScenery, 3);
	character = new Character(imageCharacter, 880, 1080, 220, 270, 2 );

	gameSound.loop();
}

function draw() {
	scenery.show();
	scenery.move();
	character.show();
}

