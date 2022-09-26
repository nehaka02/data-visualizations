//Bar Chart Representing the Mean Loss in Glacier Mass Over Time

let table;
let meanLoss;
let years;

function preload(){
  
  table = loadTable("https://pkgstore.datahub.io/core/glacier-mass-balance/glaciers_csv/data/c04ec0dab848ef8f9b179a2cca11b616/glaciers_csv.csv", "csv", "header");
  
}



function setup() {
  
  createCanvas(1000, 500);
  background(209);
  
  meanLoss = table.getColumn(1);
  years = table.getColumn(0);
  
  for(let i = 0; i < meanLoss.length; i++){
    rect(100 + 10*i, 10, Math.abs(meanLoss[i] * 50));
  }
 
    
 
}


function draw() {


}
