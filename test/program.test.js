var expect = require('chai').expect;

var transformCheckpoint = require('../src/program').transformCheckpoint;


describe('Function transformCheckpoint', function() {

  it('Function transformCheckpoint without parameter should return false', function() {
    expect(transformCheckpoint()).to.be.false;
  });

  it('Function transformCheckpoint with parameter should mutate input', function() {
    var input1 = {
      id: 'whataw0nd3rful1d',
      uuid: 'whataw0nd3rful1d',
      address: 'unknown',
      addressType: 'unknown',
      connectable: true,
      advertisement: {
        localName: undefined,
        txPowerLevel: undefined,
        manufacturerData: undefined,
        serviceData: [],
        serviceUuids: [ 'abcd' ]
      },
      rssi: -66,
      services: null,
      state: 'outofcontrol'
    };
    var input2 = {
      id: 'whataw0nd3rful1d',
      uuid: 'whataw0nd3rful1d',
      address: 'unknown',
      addressType: 'unknown',
      connectable: true,
      advertisement: {
        localName: undefined,
        txPowerLevel: undefined,
        manufacturerData: undefined,
        serviceData: [],
        serviceUuids: [ 'abcd' ]
      },
      rssi: -66,
      services: null,
      state: 'outofcontrol'
    };
    expect(input1).to.be.eql(input2);
    var input3 = transformCheckpoint(input1);
    expect(input1).not.to.be.equal(input3);
  });

});