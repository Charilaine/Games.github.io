function setup() {
  canvas = createCanvas(900,200);
  background('lavender');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('thistle');
 
 //1 
  translate(50,50);
  rect(0,0,100,100);
  
  //2
  translate(140,0);
  rect(0,0,100,100);

  //3
  translate(140,0);
  rect(0,0,100,100);
  
  translate(140,0);
  // BEGIN aanpassing
  push();
    
   stroke('cornsilk');
   strokeWeight(20);
   fill('teal');
   translate(0,40);
   rect(0,0,100,100);
  

  //5
  translate(140,0);
  rect(0,0,100,100);
  //einde aanpassing 
  pop();

  //6
  translate(140,0);
  translate(140,0);
  rect(0,0,100,100);
}
