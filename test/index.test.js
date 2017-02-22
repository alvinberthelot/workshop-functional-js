var expect = require('chai').expect;

var transformCheckpoint = require('../src/program').transformCheckpoint;




describe('Function transformCheckpoint', function() {

  it('Function transformCheckpoint without parameter should return false', function() {
    expect(transformCheckpoint()).to.be.false;
  });

});