let bgColor;
let canvasW = 400;
let canvasH = 400;
function setup(){
  createCanvas(canvasW, canvasH);
  bgColor = color(0, 755, 0);
  background(bgColor);
  
}
function draw(){
  fill('orange');
  ellipse(width/3,height/2,50,50)
}