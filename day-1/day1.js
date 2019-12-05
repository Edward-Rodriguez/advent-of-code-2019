const fs = require('fs');
var data = fs.readFileSync('input.txt', 'utf-8').split('\n');
let totalFuelRequired = 0;

function fuelCalculator(mass) {
  return Math.floor(mass / 3) - 2;
}

data.forEach(function(module) {
  totalFuelRequired += fuelCalculator(module);
});

console.log('total sum = ' + totalFuelRequired);
