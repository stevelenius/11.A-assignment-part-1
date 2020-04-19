// 11.A-assignment-part-1.js
//
// Constructs a golden honeycomb pattern on canvas as an example
// of p5.js transformation (specifically translate)
//
// also practice creating functions and nesting them in other functions

function setup() {
// canvas sized to match pattern (consistency at edges)
    createCanvas(810, 564);
  }
  
  function draw() {
// background, stroke and fill colors chosen for honey-golden character
    background(120, 90, 0);
    stroke(255, 191, 0)
    fill(179, 134, 2)
// stroke weight chosen for edge of honeycomb cells
    strokeWeight(6)

// translate first column pair the inverse of the translate amount
// included in the function
    translate(-81, 517);

// then fill the canvas with 5 column pairs and one column that 
// bleeds off the edge top and bottom
    hexColumnPair();
    hexColumnPair();
    hexColumnPair();
    hexColumnPair();
    hexColumnPair();
    hexColumnBleed();
// close draw function
  }
  
// following codes taken from p5.js reference;
// in p5.js, this is how to draw a polygon of
// more than 4 sides
  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

// this function draws a hexagon using the function above
  function hexagon() {
    push();
    polygon(0, 0, 50, 6);
    pop();
  }

// this function translates down the height of the hexagon
// and then draws another hexagon using function above
  function transHexagon() {
    translate(0, 94);
    hexagon();
  }

// first column of a column pair (bleeds off top and bottom of canvas):
// using above two functions, this function translates back to top of 
// canvas and draws a column of 7 hexagons (first one and then 6 more 
// translated down)
  function hexColumnBleed() {
    translate(81, -517);
    hexagon();
    transHexagon();
    transHexagon();
    transHexagon();
    transHexagon();
    transHexagon();
    transHexagon();
  }

// second column of a column pair (doesn't bleed--
// flush with top and bottom of canvas)
// using same two functions, this function translates back to top of 
// canvas and draws a column of 6 hexagons (first one and then 5 more 
// translated down)
// (because of nesting we need one fewer hexagon in alternate columns)
  function hexColumnNoBleed() {
    translate(81, -517);
    hexagon();
    transHexagon();
    transHexagon();
    transHexagon();
    transHexagon();
    transHexagon();
  }

// this function combines the above two functions to draw a pair of columns
  function hexColumnPair() {
      hexColumnBleed();
      hexColumnNoBleed();
  }

