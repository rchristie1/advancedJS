
function mergeSortedArrays(arr1, arr2) {
    //set variables to help loop over the arrays
    const mergedArray = [];
    let arrItem1 = arr1[0];
    let arrItem2 = arr2[0];
    let i = 1;
    let j = 1;
  
    // check input is valid
    if(arr1.length === 0) {
      return arr2;
    }
    if(arr2.length === 0) {
      return arr1;
    }

    while (arrItem1 || arrItem2) { // while array are populated
        // if there is not a value in item2 or array 1 item is less than array 2 item
        if(!arrItem2 || arrItem1 < arrItem2) {
          mergedArray.push(arrItem1); //push the current array item into the new arr
          arrItem1 = arr1[i] // set array item to the next item in the original arr
          i++; // increment the counter
      } else {
          mergedArray.push(arrItem2);
          arrItem2 = arr2[j]
          j++;
        }
    }
    
    return mergedArray;
  }
  
  mergeSortedArrays([0,3,4,31], [4,6,30]);