
//create  a var that accepts params
const curryMultiply = (a) => (b) => a * b;

// therefore you can do this
curryMultiply(6)(3);

// or make the function extensible by doing something like this
const multiplyBy12 = curryMultiply(12);

multiplyBy12(7);
