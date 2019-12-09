const fs = require('fs');
var data = fs
  .readFileSync('input.txt', 'utf-8')
  .split(',')
  .map(Number);
const testData = data.slice(0);

function intcodeProgram(arr, opcode, input1, input2, output) {
  if (opcode == 1) arr[output] = arr[input1] + arr[input2];
  else arr[output] = arr[input1] * arr[input2];
}

//replace position 1 with the value 12 & position w/ value 2
data[1] = 51;
data[2] = 21;

for (var i = 0; i <= data.length - 4; i += 4) {
  if (data[i] == 99) break;
  intcodeProgram(data, data[i], data[i + 1], data[i + 2], data[i + 3]);
}

console.log('Values after program: ' + data + '\n');

//PART 2
//PATTERN I FOUND:
//When verb = 0, last three digits = 699,
//+1 to verb = +1 to last three digits, ex: verb of 15 = last three digits = 714
//initial noun of 0 = 106,000 (total value of position 0)
//add 384,000 to value each time noun is incremented

const initNounVal = 106000;
const initVerbVal = 699;
const targetVal = 19690720;
const nounIncrementVal = 384000;

var noun = Math.floor(targetVal / nounIncrementVal);
var verb = (targetVal - (noun * nounIncrementVal + initNounVal)) % initVerbVal;

console.log('target: ' + targetVal + '\nNoun: ' + noun + '\nVerb: ' + verb);
