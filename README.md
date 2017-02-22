# workshop-functional-js

Workshop to learn basic functional programming in JavaScript.

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

Write a simple test to verify that a transformation has been done with the function +transformCheckpoint+ in file program.js.

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

1. The function +transformCheckpoint+ in file program.js is so impure, please change it to become a pure function.

2. Update test created in exercise 1.

3. Write a test to be sure that output has a different reference with input.

Please make all tests pass.

After finish this exercise, please commit all your files.

  git add .

  git commit -m "Exercise 2"

### Exercise 3

Our program is better because we use more pure functions, but now the display in our CLI (Command Line Interface) is different than before when we use :

	npm start

Please update the function +run+ in file program.js.

1. The display in CLI should be the same than before.

2. Use methods from Array.prototype to do it in a functional programing way.

Please make all tests pass.

After finish this exercise, please commit all your files.

  git add .

  git commit -m "Exercise 3"

### Exercise 4

Now we want to use Lodash to manipulate object in a functionnal programming way.

1. Please install Lodash for the project.

2. Use simple Lodash functions to refactor function +showCheckpoint+ in file program.js.

Please make all tests pass.

After finish this exercise, please commit all your files.

  git add .

  git commit -m "Exercise 4"

### Exercise 5

With Lodash we want to facilitate the visualization of the calculate property "distance" and for all the checkpoints.

- We want to add an unit for the distances, add "m" for distances greater or equal than 1, otherwise add "cm" and multiply by 100. For examples 1.25 should display "1.25 m" and 0.72 should display "72 cm".

- We want to round up calculate property "distance" with a precision of 2 decimals.

- We want to sort checkpoints with calculate property "distance" in an ascending way.

Implement theses new features and be careful with the order to apply them.

Please make all tests pass.

After finish this exercise, please commit all your files.

  git add .

  git commit -m "Exercise 5"

