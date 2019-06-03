
var emojiX = 200;
var emojiY = 200;

var emojiXSpeed = 0;
var emojiYSpeed = 0;

var left_key_pressed = false;
var up_key_pressed = false;
var right_key_pressed = false;
var down_key_pressed = false;

var targetX = 500;
var targetY = 150;
var hit = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  bkimg = loadImage("dark_socmed.jpg");
  socmed_img = loadImage("socialmediaslave.gif");
  img1 = loadImage("fbthumbsup.png");
  img2 = loadImage("sademoji.png")
  img3 = loadImage("happyemoji.png");
  img4 = loadImage("fbthumbsdown.png");


}

function draw() {
  //Background image
  imageMode(CORNER);
  image(bkimg, 200, 50);

  //Happy emoji
  image(img3, emojiX, emojiY)
  fill(0,hit,100);

  //Facebook icon (the target)
  image(img1, targetX,targetY);
  moveCircle();
  collision();


}

function keyPressed(){
if(keyCode == LEFT_ARROW){
left_key_pressed = true;
}
if(keyCode == UP_ARROW){
up_key_pressed = true;
}
if(keyCode == RIGHT_ARROW){
right_key_pressed = true;
}
if(keyCode == DOWN_ARROW){
down_key_pressed = true;
	}

}

function keyReleased(){
if(keyCode == LEFT_ARROW){
left_key_pressed = false;
}
if(keyCode == UP_ARROW){
up_key_pressed = false;
}
if(keyCode == RIGHT_ARROW){
right_key_pressed = false;
}
if(keyCode == DOWN_ARROW){
down_key_pressed = false;
	}

}

function moveCircle(){
emojiXSpeed *= 0.96;
emojiYSpeed *= 0.96;
emojiX += emojiXSpeed;
emojiY += emojiYSpeed;
if(left_key_pressed){
emojiXSpeed += -0.3
	}
if(up_key_pressed){
emojiYSpeed += -0.3
	}
if(right_key_pressed){
emojiXSpeed += 0.3
	}
if(down_key_pressed){
emojiYSpeed += 0.3
	}

if(emojiX > 1180 || emojiX < 130){
emojiXSpeed *= -1
}
if(emojiY > 550 || emojiY < 0){
emojiYSpeed *= -1
}
}

function collision(){
if(dist (emojiX, emojiY, targetX, targetY) < 30){
hit = 100;

targetX = random(130, 1125);
targetY = random(20, 570)
}
else{
hit = 0
}



if(mouseIsPressed == true){

  image(socmed_img, 400, 80);
  imageMode(CORNER);

  image(img2, emojiX-55, emojiY);
  image(img4, targetX, targetY);
  fill('red');
  textSize(40);
  text('Are you satisfied yet?', 610, 400);
}
// else(){
//   noBackground();
// }


}
