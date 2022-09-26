//Neha Aryasomayajula
//Interactive Bar Chart Representing Heights of Buildings in New York

values = [85.0, 86.9, 184.1, 443.2, 260.0];
let blue1 = 100;
let blue2 = 100;
let blue3 = 100;
let blue4 = 100;
let blue5 = 100;

function setup() {
  createCanvas(700, 500);

}


function draw() {
  background(240);
  textSize(15);
  text("Heights of Buildings in New York", 25, 20);
  
  fill(0, 0, blue1, 150);
  rect(250, 365, 20, 85);
  if(mouseY > 365 && mouseY < 450 && mouseX > 250 && mouseX < 270){
    text("Trinity Church: 85.0 meters", 420, 20);
    blue1 = 240;
  }
  else{
    blue1 = 100;
  }

  fill(0, 0, blue2, 150);
  rect(275, 363.1, 20, 86.9);
  if(mouseY > 363.1 && mouseY < 450 && mouseX > 275 && mouseX < 295){
    text("Flatiron Building: 86.9 meters", 420, 20);
    blue2 = 240;
  }
  else{
    blue2 = 100;
  }
  
  fill(0, 0, blue3, 150);
  rect(300, 265.9, 20, 184.1);
  if(mouseY > 265.9 && mouseY < 450 && mouseX > 300 && mouseX < 320){
    text("George Washington Bridge: 184.1 meters", 420, 20);
    blue3= 240;
  }
  else{
    blue3 = 100;
  }
  
  fill(0, 0, blue4, 150);
  rect(325, 6.8, 20, 443.2);
  if(mouseY > 6.8 && mouseY < 450 && mouseX > 325 && mouseX < 345){
    text(" Empire State Building: 443.2 meters", 420, 20);
    blue4= 240;
  }
  else{
    blue4 = 100;
  }
  
  fill(0, 0, blue5, 150);
  rect(350, 190, 20, 260);
  if(mouseY > 190 && mouseY < 450 && mouseX > 350 && mouseX < 370){
    text("30 Rockefeller Plaza: 260.0 meters", 420, 20);
    blue5= 240;
  }
  else{
    blue5 = 100;
  }
  
}
