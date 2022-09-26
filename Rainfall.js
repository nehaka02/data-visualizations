// Neha Aryasomayajula
// An interactive, pictoral visualization that uses color as a visual channel to encode the amount of
// rainfall in 5 or more areas.

function setup() {
  createCanvas(500, 500);
  

}


function draw() {
  background(209);
  noStroke();
  
  fill(0);
  text("Average Yearly Rainfall in Five States", 155, 20);
  
  fill(0, 0, 150, 150);
  let one = ellipse(100, 100, 100, 100);
  let dist1 = dist(mouseX, mouseY, 100, 100);
  if(dist1 < 50){
    fill(0);
    text("Hawaii: 57.2 inches of rain per year", 155, 450);
  }
  
  fill(0, 50, 175, 125);
  let two = ellipse(350, 125, 100, 100);
  let dist2 = dist(mouseX, mouseY, 350, 125);
  if(dist2 < 50){
    fill(0);
    text("Louisiana: 56.9 inches of rain per year", 155, 450);
  }  
  
  fill(0, 100, 200, 100);
  let three = ellipse(250, 250, 100, 100);
  let dist3 = dist(mouseX, mouseY, 250, 250);
  if(dist3 < 50){
    fill(0);
    text("Mississippi: 55.5 inches of rain per year", 155, 450);
  } 
  
  fill(0, 150, 225, 75);
  let four = ellipse(125, 350, 100, 100);
  let dist4 = dist(mouseX, mouseY, 125, 350);
  if(dist4 < 50){
    fill(0);
    text("Utah: 13.6 inches of rain per year", 155, 450);
  }  
  
  fill(0, 185, 255, 50);
  let five = ellipse(400, 350, 100, 100);
  let dist5 = dist(mouseX, mouseY, 400, 350);
  if(dist5 < 50){
    fill(0);
    text("Arizona: 12.6 inches of rain per year", 155, 450);
  }  

}
