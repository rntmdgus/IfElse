function setup(){
   createCanvas(500, 500);
   noFill();
   stroke(255);
}

function draw(){
   background(100);
   ellipse(mouseX, mouseY, 50, 50);

   // draw function
   if (mouseX < 300){
  ellipse(200, 200, 100, 100);
   }
}