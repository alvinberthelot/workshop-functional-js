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

### Exercise 2

1. The function +transformCheckpoint+ in file index.js is so impure, please change it to become a pure function.

2. Update test created in exercise 1.

3. Write a test to be sure that output has a different reference with input.

Please make all tests pass.

After finish this exercise, please commit all your files.

  git add .

  git commit -m "Exercise 2"

### Exercise 3

Our program is better because we use more pure functions, but now the display in our CLI (Command Line Interface) is different than before when we use :

	npm start

Please update the function +run+ in file index.js.

1. The display in CLI should be the same than before.

2. Use methods from Array.prototype to do it in a functional programing way.

Please make all tests pass.

After finish this exercise, please commit all your files.

  git add .

  git commit -m "Exercise 3"

