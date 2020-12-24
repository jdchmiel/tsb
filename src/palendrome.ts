'use strict';

export class Palendrome {
    private logger : any;

    constructor() {
    }

    parseInput(input: string): string[] {
        let possiblePalendromes: string[] = [];
        // should test here if first line integer matches lines passed in
        // but instructions do not specify how to handle invalid input.
        // my test cases will not verify input is valid or not.
        possiblePalendromes.push(...input.split('\n').map(s => s.trim()));
        if ( possiblePalendromes.length > 1 ) {
            if (parseInt(possiblePalendromes[0]) != possiblePalendromes.length -1) {
                console.log(`bad input, ${possiblePalendromes[0]} expected,${possiblePalendromes.length -1} found.`);
            }
            return possiblePalendromes.slice(1); // throw out integer count
        }
        return [];
    }

    testOneOffPalendrome(test: string): number {
        let response: number = -1,
            left: number = 0,
            right: number = test.length -1; // 0 index
        if (right <= 0) {
            // a single char is already a palendrome.
            // an empty string should be -1 per challenge.md
            return -1;
        }
        while ( left < right) {
            if ( test[left] != test[right]) {
                //check left single char removal
                if ( test[left + 1] == test[right] ){
                    if (response == -1) {
                        response = left;
                        left +=1;
                    } else {
                        // second flip requirement found, abort 
                        return -1;
                    }
                //check right single char removal
                } else if ( test[left] == test[right -1] ){
                    if (response == -1) {
                        response = right;
                        right -= 1;
                    } else {
                        // second flip requirement found, abort 
                        return -1;
                    }
                // check for when a char is flipped by skipping both chars
                } else if ( test[left+1] == test[right -1] ){     
                    if (response == -1) {
                        response = left; // this could be either, challenge state it accepts any valid
                        // since skipping both sides, leave positions alone
                    } else {
                        // second flip requirement found, abort 
                        return -1;
                    }
                }           
            }
            left += 1;
            right -= 1;
        }
        return response;
    }
}