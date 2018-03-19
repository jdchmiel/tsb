'Use Strict';

import assert = require('assert');
import sinon = require('sinon');
import {HelloService} from '../../src/index';

let logStub = sinon.stub(), // use to hide noise in test results
 config =
    {
      greet: 'Hello and welcome to the boiler plate,',
      logger: { log: logStub}
    },
    target = new HelloService(config);


describe('Hello Service', () => {
  describe('sayHi', () => {
    it('should log the greeting', (done) => {
      logStub.reset();
      let greeting = target.sayHi('Jared');
      assert.ok(logStub.called, 'console.log should be called');
      done();
    });

    it('should return the correct greeting when greet is in configuration', (done) => {
      let name = 'Jared',
        expected = config.greet + ' ' + name,
        actual = target.sayHi(name);
      assert.equal(actual, expected, 'The greeting generated should be correct');
      done();
    });

    it('should return the default greeing when greet is not in configuration', (done) => {
      let name = 'Jared',
        expected = 'hello Jared',
        t2 = new HelloService({logger: {log: logStub}}),
        actual = t2.sayHi(name);
      assert.equal(actual, expected, 'The default greeting should be returned');
      done();
    });
  });
});