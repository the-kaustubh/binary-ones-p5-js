
let xPoints = [];
let yPoints = [];
let xCounter = 0;

function setup() {
  createCanvas(800, 600);
  background(0);
  textAlign(CENTER, CENTER);
  // x axis

  stroke(255);
  line(0, 500, width-20, 500);
  strokeWeight(8);


  // xCounter=200;
  for(xInc = 25; xInc < width-15; xInc+=25) {
    xPoints.push(xInc);
    yPoints.push(500 - (getOnes(xCounter)*25));
    point(xInc, 500);
    push();
      fill(255);
      stroke(0);
      text(xCounter+"", xInc+8, 515);
    pop();
    xCounter++;
  }
  strokeWeight(1);

  line( 25, 0, 25, 550);
  strokeWeight(8);
  yCounter=0;

  for(yInc = 500; yInc > 25; yInc-=25) {
    point(25, yInc);
    push();
      fill(255);
      stroke(0);
      text(yCounter+"", 10, yInc);
    pop();
    yCounter++;
  }

  strokeWeight(1);
}

function draw() {
  noLoop();
  // beginShape();
  for(i = 0; i < xPoints.length; i ++) {
    push();
    strokeWeight(4);
    point(xPoints[i], yPoints[i]);
    pop();
    console.log(xPoints[i] + ", " + yPoints[i]);
  }
  for(j = 0; j < xPoints.length; j++) {
    line(xPoints[j], yPoints[j], xPoints[j+1], yPoints[j+1]);
  }
  // endShape();
}

function getOnes(vble)  {
  return (vble >>> 0).toString(2).split('1').length -1;
}
