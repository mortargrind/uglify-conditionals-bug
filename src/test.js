const objectAssignment = require('./specs/objectAssignment.js');
const uglyObjectAssignment = require('../dist/objectAssignment.min.js');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const input = getRandomInt(100);
console.log('input is :', input);

const normalContext = {
  objectAssignment,
  object:{},
};

const uglifyContext = {
  uglyObjectAssignment,
  object:{},
};

const normalResult = normalContext.objectAssignment(input);
const uglyResult = uglifyContext.uglyObjectAssignment(input);

if (JSON.stringify(normalResult) === JSON.stringify(uglyResult)) {
  console.error('success for object');
} else {
  console.error('error for object');
  process.exit(-1);
}
