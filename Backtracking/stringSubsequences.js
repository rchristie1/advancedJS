function printSubsequences(word, subseq="") {
    if (word.length === 0) {
      v1Results.push("\"" + subseq + "\"")
      return
    }
  
    printSubsequences(word.substring(1, word.length), subseq+word[0]) // include the char
    printSubsequences(word.substring(1, word.length), subseq) // omit the char
  }
  
  
  //####################
  //### IMPLEMENT ME ###
  //####################
  function printSubsequences2(word, subseq="", i=0) {
    if(i === word.length) {
        v2Results.push("\"" + subseq + "\"")
        return
    }

    printSubsequences2(word, subseq+word[i], i+1)
    printSubsequences2(word, subseq, i+1)
  }
  
  
  let v1Results = []
  let v2Results = []
  printSubsequences("ABCD")
  printSubsequences2("ABCD")

  console.log(v1Results);
  console.log(v2Results);