const makeCounter = val => {
  let value = val;

  const increment = () => value + 1;
  const decrement = () => value - 1;

  //this function can't be accessed outside the parent because it isnt returned in the object
  const subtractFive = () => value - 5;
  console.log(subtractFive);
  

  return {
    // in ES6 if the name and value are the same you only need to put 1 name instead of value: value
    value,
    increment,
    decrement,
  };
};

const counter = makeCounter(10);

counter.decrement();
