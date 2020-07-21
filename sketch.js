let gameSound;
let jumpSound;

let initialScreen = new InitialScreen();
let gameScreen = new GameScreen();

let screens = {
	initialScreen,
	gameScreen,
}

// globals
let g_character; 
let g_currentScreen = 'initialScreen';
let g_isGameOver;


function preload(){
	gameSound = loadSound('./assets/sounds/soundtrack.mp3');
	jumpSound = loadSound('./assets/sounds/jump.mp3');

	initialScreen.preload([
		'./assets/background/layers/init_sky.png',
		'./assets/background/layers/clouds_1.png',
		'./assets/background/layers/rocks.png',
		'./assets/background/layers/clouds_2.png',
		'./assets/background/layers/ground_all.png',
	]);

	gameScreen.preload([
		{
			name: 'background', 
			paths: [
				'./assets/background/layers/sky.png',
				'./assets/background/layers/clouds_1.png',
				'./assets/background/layers/rocks.png',
				'./assets/background/layers/clouds_2.png',
				'./assets/background/layers/ground_all.png',
			]
		},
		{
			name: 'character',
			paths: [
				'./assets/character/walking.png'
			]
		},
		{
			name: 'enemies', 
			paths: [
				'./assets/enemies/ice_golem.png',
				'./assets/enemies/lava_golem.png',
				'./assets/enemies/earth_golem.png'
			]
		},
		{
			name: 'gameover',
			paths: [
				'./assets/other/game_over.png'
			]
		},
		{
			name: 'heart',
			paths: [
				'./assets/other/heart.png'
			]
		},
		{
			name: 'dead',
			paths: [
				'./assets/other/dead.png'
			]
		}
	]);

	frameRate(30);
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	initialScreen.setup([0, 0.1, 0, 0.3, 0]);
	gameScreen.setup([0, 0.1, 0, 0.3, 0.5]);
	gameSound.loop();

}

function draw() {

	screens[g_currentScreen].draw();
	
}

