const objectAssignment = require('./specs/objectAssignment.js');
const uglyObjectAssignment = require('../dist/objectAssignment.min.js');

const input = 5;

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
  console.log('Success!');
} else {
  console.error('Error!');
  process.exit(-1);
}
