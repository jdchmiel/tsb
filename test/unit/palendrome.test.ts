'Use Strict';

import assert = require('assert');
import sinon = require('sinon');
import {Palendrome} from '../../src/Palendrome';
let target = new Palendrome();


describe('Palendrome', () => {
  describe('checkIfPalendrome', () => {
    it('should return -1 for empty string', (done) => {
      let actual:number = target.testOneOffPalendrome('');
      assert.deepStrictEqual(actual, -1, 'expecting -1');
      done();
    });
    it('should return -1 for single char string', (done) => {
      let actual:number = target.testOneOffPalendrome('g');
      assert.deepStrictEqual(actual, -1, 'expecting -1');
      done();
    });
    it('should return -1 for small even length palendrome', (done) => {
      let actual:number = target.testOneOffPalendrome('gg');
      assert.deepStrictEqual(actual, -1, 'expecting -1');
      done();
    });
    it('should return -1 for small odd length palendrome', (done) => {
      let actual:number = target.testOneOffPalendrome('ggg');
      assert.deepStrictEqual(actual, -1, 'expecting -1');
      done();
    });
    it('should return 0 for small even length one off palendrome', (done) => {
      let actual:number = target.testOneOffPalendrome('ab');
      assert.deepStrictEqual(actual, 0, 'expecting 0');
      done();
    });
    it('should return 0 for small odd length one off palendrome', (done) => {
      let actual:number = target.testOneOffPalendrome('abb');
      assert.deepStrictEqual(actual, 0, 'expecting 0');
      done();
    });

    it('should return 5 for small even length one char off palendrome at last char', (done) => {
      let actual:number = target.testOneOffPalendrome('abcbax');
      assert.deepStrictEqual(actual, 5, 'expecting 5');
      done();
    });
    it('should return 6 for small odd length one off palendrome at last char', (done) => {
      let actual:number = target.testOneOffPalendrome('abccbax');
      assert.deepStrictEqual(actual, 6, 'expecting 6');
      done();
    });

    it('should return 5 when even string contains central wrong extra char', (done) => {
      let actual:number = target.testOneOffPalendrome('abcdcxba');
      assert.deepStrictEqual(actual, 5, 'expecting 5');
      done();
    });
    it('should return 4 when odd string contains central wrong extra char', (done) => {
      let actual:number = target.testOneOffPalendrome('abccxba');
      assert.deepStrictEqual(actual, 4, 'expecting 4');
      done();
    });

    it('should return 1 when even string contains central wrong flipped char', (done) => {
      let actual:number = target.testOneOffPalendrome('abccxa');
      assert.deepStrictEqual(actual, 1, 'expecting 1');
      done();
    });
    it('should return 2 when odd string contains central wrong flipped char', (done) => {
      let actual:number = target.testOneOffPalendrome('abcdxba');
      assert.deepStrictEqual(actual, 2, 'expecting 2');
      done();
    });

    it('should return -1 when more than 1 flipped char', (done) => {
      let actual:number = target.testOneOffPalendrome('xbxddcba');
      assert.deepStrictEqual(actual, -1, 'expecting -1');
      done();
    });

    it('should return -1 when more than 1 extra char', (done) => {
      let actual:number = target.testOneOffPalendrome('axbxcddcba');
      assert.deepStrictEqual(actual, -1, 'expecting -1');
      done();
    });
    it('should return -1 when more than 1 extra char', (done) => {
      let actual:number = target.testOneOffPalendrome('axxdcba');
      assert.deepStrictEqual(actual, -1, 'expecting -1');
      done();
    });
    

  });
  describe('parseInput', () => {
    it('should return  [] when input is empty', (done) => {
      let input:string = '';
      let actual:string[] = target.parseInput(input);
      assert.deepStrictEqual(actual, [], 'expecting []');
      done();
    });
    it('should strip spaces and return expected when input is valid', (done) => {
      let input:string = `3
aba    
abba
   abcbx`,
      expected:string[] = ['aba','abba','abcbx'];
      let actual:string[] = target.parseInput(input);
      assert.deepStrictEqual(actual, expected, 'expecting ' + expected);
      done();
    });
  })
});