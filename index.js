// A

// funct
function allLongestStrings(inputArray) {
    let maxLength = 0;
    inputArray.forEach(function(str) {
      if (str.length > maxLength) {
        maxLength = str.length;
      }
    });
    return inputArray.filter(function(str) {
      return str.length === maxLength;
    });
  }
  
  // array
  let inputArray = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
  
  // function find longest string in array
  let longestStrings = findLongestStrings(inputArray);
  
  // output the longest string
  console.log(inputArray.join(", "));
  console.log(longestStrings.join(", "));

//B
// funct
function num(numArray) {
    let evenSum = 0;
    let oddSum = 0;
  
    for (let i = 0; i < numArray.length; i++) {
      if (i % 2 === 0) {
        evenSum += numArray[i];
      } else {
        oddSum += numArray[i];
      }
    }
  
    return [evenSum, oddSum];
  }
  
  // Call the function with an array of numbers and output the results
  console.log(num([60, 40, 55, 75, 64]));