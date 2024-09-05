let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 20;      // diameter of the ball

let x2 = 200;     // x position of the ball
let y2 = 0;       // y position of the ball
let x2Speed = 3;  // speed in X direction
let y2Speed = 7; // speed in Y direction
let d2 = 80;      // diameter of the ball

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220, 50); // try commenting this out!

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1; 
    fill(random(250), random(250), random(250)); //changes colors for ellipse 1 when it hits walls
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1; 
    fill(random(250), random(250), random(250)); //changes colors for ellipse 1 when it hits walls
  }
  y1 = y1 + y1Speed
   
  ellipse(mouseX, mouseY, 120, 120) //ellpse 1 to cursor; 120,120 is cursor ellipse diameter
   //this changes both ellipse colors but it looks fugly
    
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;  
  }
  x2 = x2 + x2Speed; 

  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1;  
  }
  y2 = y2 + y2Speed;

  ellipse(x2, y2, d2);

}
