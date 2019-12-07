const fs = require('fs');
var data = fs
  .readFileSync(
    '/Users/edwar/Documents/Udemy/advent-of-code-2019/day-2/input.txt',
    'utf-8'
  )
  .split(',')
  .map(Number);

function intcodeProgram(opcode, input1, input2, output) {
  if (opcode == 1) data[output] = data[input1] + data[input2];
  else data[output] = data[input1] * data[input2];
}

for (var i = 0; i <= data.length - 4; i += 4) {
  if (data[i] == 99) break;
  intcodeProgram(data[i], data[i + 1], data[i + 2], data[i + 3]);
}

console.log('Values after program: ' + data);
