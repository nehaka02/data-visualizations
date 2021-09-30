//Neha Aryasomayajula

//Create a visualization that uses height as a visual channel to encode the height of 5
//buildings in New York City. 

values = [85.0, 86.9, 184.1, 443.2, 260.0];

function setup() {
  createCanvas(700, 500);
  background(209);

}


function draw() {
  
  textSize(15);
  text("Heights of Buildings in New York", 25, 20);
  
  for(var i = 0; i < values.length; i++){
    rect(i*25 + 175, 450-values[i], 20, values[i]);
    text((i+1).toString(), i*25 + 177, 465-values[i]);
  }


  text("1. Trinity Church", 400, 50);
  text("2. Flatiron Building", 400, 75);
  text("3. George Washington Bridge", 400, 100);
  text("4. Empire State Building", 400, 125);
  text("5. 30 Rockefeller Plaza", 400, 150);

}
