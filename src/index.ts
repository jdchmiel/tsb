import { worker } from 'cluster';
import {Palendrome} from './Palendrome';

let testerPal = new Palendrome(),
  sample:string = ``;

process.stdin.on('data', function(line:string){
  //console.log('#:'+line);
  sample += line;
});
process.stdin.on('end', () => {
  work();
});

function work() {
  // console.log(sample);
  let possiblePalendromes = testerPal.parseInput(sample);
  // console.log(possiblePalendromes);

  possiblePalendromes.forEach(possiblePal => {
    console.log(testerPal.testOneOffPalendrome(possiblePal));
  });
  // console.log('Done');
}


