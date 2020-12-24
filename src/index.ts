import {Palendrome} from './Palendrome';

console.log('Begin');

let testerPal = new Palendrome(),
  sample:string = ``,
  readline = require('readline'),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

rl.on('line', function(line:string){
    sample += line;
});

let possiblePalendromes = testerPal.parseInput(sample);
possiblePalendromes.forEach(possiblePal => {
  console.log(testerPal.testOneOffPalendrome(possiblePal));
});


