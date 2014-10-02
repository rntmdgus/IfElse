function setup(){
   createCanvas(1000, 1000);
   noFill();
   stroke(255);
}

function draw(){
   background(100);
   ellipse(100, 100, 50, 50);

   // draw function
   if (mouseX < 300){
  ellipse(200, 200, 100, 100);
   }
}