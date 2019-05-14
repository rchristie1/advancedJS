const multiply = (a, b, c) => a*b*c
const partialMutiplyBy7 =  multiply.bind(null, 7);

partialMutiplyBy7(2, 1)