const theString = 'how many letters are you searching for that appear in this string';
let j = 0;

function iterateText(text, letter){
  for (let i = 0; i < text.length - 1; i++) {
    if (text[i] === letter){
      j++
    }
  }
  return j
}

iterateText(theString, 'i')