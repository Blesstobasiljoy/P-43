var database;
var form,form_img, player, game; 
var position;
var playerCount = 0;
var gameState = 0;
var allPlayers;
var ground, ball, ball_img, red_img;
var players, player1, player2;

function preload()
{
  form_img = loadImage("images/background.jpg");
  ground = loadImage("images/ground_2.png");
  red_img = loadImage("images/red-player.png");
  ball_img = loadImage("images/ball.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  form = new Form();

  game = new Game();
  game.getState();
  // game.start();

}

function draw() {

  background(form_img);
  
  form.display();

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

}