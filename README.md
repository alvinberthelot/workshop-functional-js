# boilerplate-workshops-node-js

Boilerplate for workshops on Node.js.

## Commands

### Installation

Please install dependencies first.

	npm install

### Tests & lint

To launch the tests.

	npm test

To lint sources.

	npm run lint

### Start

To start program.

	npm start

## Exercises

Please verify that after all exercises the linter should not return errors.

### Exercise 1

Write a simple test to verify that a transformation has been done with the function +transformCheckpoint+ in file index.js.

You can use this example data to run your test :

{
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
}

After finish this exercise, please commit all your files.

  git add .

  git commit -m "Exercise 1"
