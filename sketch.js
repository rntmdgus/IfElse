function setup(){
   createCanvas(500, 500);
   noFill();
   stroke(255);
}
function draw(){
   background(100);
   ellipse(mouseX, mouseY, 50, 50);

//가로 동그라미
   if (mouseX < 100) {
      ellipse(50, 250, 100, 100);
   } else if (mouseX < 200){
      ellipse(150, 250, 100, 100);
   } else if (mouseX < 300){
      ellipse(250, 250, 100, 100);
   } else if (mouseX < 400){
      ellipse(350, 250, 100, 100);
   } else {
      ellipse(450, 250, 100, 100);
   }

//세로 동그라미
      if (mouseY < 100) {
      ellipse(250, 50, 100, 100);
   } else if (mouseY < 200){
      ellipse(250, 150, 100, 100);
   } else if (mouseY < 300){
      ellipse(250, 250, 100, 100);
   } else if (mouseY < 400){
      ellipse(250, 350, 100, 100);
   } else {
      ellipse(250, 450, 100, 100);
   }
//가로 네모
   if (mouseX < 0) {
      noFill();
      rect(-50, 225, 50, 50);
   } else if (mouseX < 50){
      noFill();
      rect(-25, 225, 50, 50);
   } else if (mouseX < 100){
      fill(255,255,255);
      ellipse(50, 250, 50, 50);
   } else if (mouseX < 150){
      noFill();
      rect(75, 225, 50, 50);
   } else if (mouseX < 200){
      fill(255,255,255);
      ellipse(150, 250, 50, 50);
   } else if (mouseX < 250){
      noFill();
      rect(175, 225, 50, 50);
   } else if (mouseX < 300){
      fill(255,255,255);
      ellipse(250, 250, 50, 50);
   } else if (mouseX < 350){
      noFill();
      rect(275, 225, 50, 50);
   } else if (mouseX < 400){
      fill(255,255,255);
      ellipse(350, 250, 50, 50);
   } else if (mouseX < 450){
      noFill();
      rect(375, 225, 50, 50);
   } else if (mouseX < 500){
      fill(255,255,255);
      ellipse(450, 250, 50, 50);
   } else if (mouseX < 550){
      noFill();
      rect(475, 225, 50, 50);
   } else {
      fill(255,255,255);
      ellipse(550, 250, 50, 50);
   }

//세로 네모
   if (mouseY < 0) {
      noFill();
      rect(225, -50, 50, 50);
   } else if (mouseY < 50){
      noFill(); 
      rect(225, -25, 50, 50);
   } else if (mouseY < 100){
      fill(255,255,255);
      ellipse(250, 50, 50, 50);
   } else if (mouseY < 150){
      noFill();
      rect(225, 75, 50, 50);
   } else if (mouseY < 200){
      fill(255,255,255);
      ellipse(250, 150, 50, 50);
   } else if (mouseY < 250){
      noFill();
      rect(225, 175, 50, 50);
   } else if (mouseY < 300){
      fill(255,255,255);
      ellipse(250, 250, 50, 50);
   } else if (mouseY < 350){
      noFill();
      rect(225, 275, 50, 50);
   } else if (mouseY < 400){
      fill(255,255,255);
      ellipse(250, 350, 50, 50);
   } else if (mouseY < 450){
      noFill();
      rect(225, 375, 50, 50);
   } else if (mouseY < 500){
      fill(255,255,255);
      ellipse(250, 450, 50, 50);
   } else if (mouseY < 550){
      noFill();
      rect(225, 475, 50, 50);
   } else {
      fill(255,255,255);
      ellipse(250, 550, 50, 50);
   }
}