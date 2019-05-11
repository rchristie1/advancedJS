// Reverse the string Hi my name is Ryan
//nayR eman ym iH
const text = 'Hi my name is Ryan'

function reverse(str) {
  // check input
  if(!str || str.length < 2 || typeof str !== 'string'){
    return console.log('@@@@');
  }

  const reverseArr = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    reverseArr.push(str[i]);
  }
  console.log(reverseArr)

  return reverseArr.join('');
}

function reverse2(str){
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

// reverse(text)
// reverse2(text)
reverse3(text)