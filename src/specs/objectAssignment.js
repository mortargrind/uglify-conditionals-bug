function calculator(value) {
  return value * value;
}

function someFunc() {
  return null;
}

function objectAssignment(input) {
  var property = someFunc(input);

  if (property === null) {
    property = calculator(input);
    this.object[property] = input;
  } else {
    this.object[property] = input;
  }

  return this.object;
}

module.exports = objectAssignment;
