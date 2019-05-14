// compose runs one function after another
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

const sum2 = (num) => num + 4;

// f(g(a)) === 1(4(5)) should return 10
compose (sum, sum2)(5)