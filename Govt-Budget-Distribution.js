///Interactive Bar Chart Representing the Distribution of U.S Government Budget in 2021

let table;
let defaultColor = "#B6DFEA";
let hoverColor = "#6192A0";
let xEdge = 40;
let yEdge = 650;
let thisYearNames = [];
let thisYearBudgets = [];
let budgetPercentages = [];
let totalBudget = 0.0;

//Loading csv data into table
function preload(){
  table = loadTable("https://pkgstore.datahub.io/core/usa-education-budget-analysis/budget_csv/data/e1f21ece51266b251d4431c3c5bb9d79/budget_csv.csv", "csv", "header");
}

function setup() {
  createCanvas(700, 700);
  
  //Splits department names, calendar years, and budgets into their own arrays
  let departmentNames = table.getColumn(0);
  let calendarYears = table.getColumn(1);
  let budgets = table.getColumn(2); 
  
  //Getting rid of rows that contain negative or nonexistent budgets
  for(let i = 0; i < budgets.length; i++){
    if(parseInt(budgets[i]) < 0 || budgets[i] == "" || budgets[i] == " "){
      budgets.splice(i, 1);
      departmentNames.splice(i, 1);
      calendarYears.splice(i, 1);
    }
  }
  
  //Getting arrays for the dept. names + budgets in 2021 only
  for(let i = 0; i < calendarYears.length; i++){
    if(calendarYears[i] == "2021"){
      thisYearNames.push(departmentNames[i]);
      thisYearBudgets.push(budgets[i]);
    }
  }
  
  
  //Removing last three elements from thisYearNames and thisYearBudgets arrays 
  //31: "Undistributed Offsetting Receipts" 32: "(Off-budget)" 33: "Total budget authority"
  delete thisYearNames[31];
  delete thisYearNames[32];
  delete thisYearNames[33];
  
  delete thisYearBudgets[31];
  delete thisYearBudgets[32];
  delete thisYearBudgets[33];
  
  
  //I'm creating an array called budgetPercentages, which contains each department's percentage of the total budget scaled up by 200
  //This is what is actually getting graphed (rather than the absolute quantities)
  for(let i = 0; i < 31; i++){
    totalBudget = totalBudget + (parseFloat(thisYearBudgets[i]));
  }
  
  for(let i = 0; i < 31; i++){
    budgetPercentages.push((((parseFloat(thisYearBudgets[i])) / totalBudget) * 2000));
  }

}


function draw() {
  background("#EEEEEE");
  fill(defaultColor);
  
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  
  //Headers
  text("Distribution of U.S Government Budget in 2021", 160, 20);
  text("*Hover Over Chart For More Information*", 160, 35);
  
  //X-axis label
  text("Type of Government Agency", 350, 665);
  
  //Y-axis line
  line(40, 50, 40, 650);
 
 //This for loop draws each rectangle on the bar graph, changes the fill color based on whether the mouse is hovering over a bar, and calls the displayText() function
 //when the mouse hovers over a specific bar
 
  for(let i = 0; i < 31; i++){
    if((mouseX > xEdge + (i * 20)) && (mouseX < xEdge + (i * 20) + 20) && (mouseY >= yEdge - budgetPercentages[i]) && (mouseY <= yEdge)){
      fill(hoverColor);
      rect((xEdge + (i * 20)), (yEdge - budgetPercentages[i]), 20, (budgetPercentages[i]));
      fill(0);
      displayText(i);
    }
    else{
      fill(defaultColor);
      rect((xEdge + (i * 20)), yEdge - budgetPercentages[i], 20, budgetPercentages[i]);      
    }
  }
  
  //Code for y-axis label
  fill(0);
  textSize(12);
  angleMode(DEGREES);
  rotate(-90);
  textAlign(CENTER);
  text("Percent of Total Budget", -350, 30);
  rotate(90);

}

//This function displays the corresponding government dept./percentage of total budget/actual budget depending on which bar is being hovered on
//This function gets called in the draw function
function displayText(index){
  textSize(14);
  textAlign(CENTER, CENTER);
  return (text(thisYearNames[index], 350, 70), text(((budgetPercentages[index]/2000) * 100).toString() + "%" + " of Total Budget" + " (" + formatNumber(thisYearBudgets[index]) + ")", 350, 90));
}

//Instead of having each number in millions, this function converts the oringal numbers into millions/billions/trillions depending on the # of digits
function formatNumber(number){
  let intValue = int((parseFloat(number)));
  let numDigits = intValue.toString().length;
  if(numDigits == 3){
    return("$" + number.toString() + " M");
  }
  if(numDigits == 4){
    return("$" + number.toString().substring(0,1) + "." + number.toString().substring(1, number.toString().length-2) + " B");
  }
  if(numDigits == 5){
    return("$" + number.toString().substring(0,2) + "." + number.toString().substring(2, number.toString().length-2) + " B");
  }
  if(numDigits == 6){
    return("$" + number.toString().substring(0,3) + "." + number.toString().substring(3, number.toString().length-2) + " B");
  }
  if(numDigits == 7){
    return("$" + number.toString().substring(0, 1) + "." + number.toString().substring(1, number.toString().length-2) + " T");
  }
}
