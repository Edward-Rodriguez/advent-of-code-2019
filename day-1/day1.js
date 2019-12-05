const fs = require('fs');
var data = fs.readFileSync('input.txt', 'utf-8').split('\n');
let fuelRequired = 0;
let actualFuelRequired = 0;

function fuelCalculator(mass) {
  return Math.floor(mass / 3) - 2;
}

//(PART 1) calculate total fuel needed
data.forEach(function(module) {
  fuelRequired += fuelCalculator(module);
});

console.log('total sum = ' + fuelRequired);

//(PART 2)
function realFuelCalculator(mass) {
  var realModuleFuelRequirement = 0;
  while (mass > 5) {
    mass = fuelCalculator(mass);
    realModuleFuelRequirement += mass;
  }
  return realModuleFuelRequirement;
}

//Calculate total sum of the actual fuel required for each module
data.forEach(function(module) {
  actualFuelRequired += realFuelCalculator(module);
});

console.log('actual sum = ' + actualFuelRequired);
