//  Problem 1: Let’s play a mind game.
// It will take positive numbers and return a value after some kind of stuff like multiplication,addition,division and last subtraction.

let mindGame = function (pNumber) {
  let multiplication, addition, division;
  try {
    if (pNumber < 0) throw "Please enter a positive value"; 

    multiplication = pNumber * 3;
    addition = multiplication + 10;
    division = addition / 2;
    return division - 5;
    
  } catch (ex) {
    return ex;
  }
};


//  Problem 2: Finding even or odd.
// It will take strings and return Even or Odd based on their total character.

let evenOdd = function (stringChar) {
  let size;
  try {
    if (typeof stringChar !== "string") throw "Please enter strings. No number allowed";

    size = stringChar.length;

    if (size % 2 == 0) {
       return `Even`;
     
    } else {
       return `Odd`;
     
    }
  } catch (ex) {
    return ex;
  }
};


//  Problem 3: Is Less or Greater than seven.
// It will take number and do some calculation. No string allowed.

let isLGSeven = function (number) {
  let sweetNumber, absNumber;
  try {
    if (typeof number !== "number") throw "Please enter a number. No string allowed";

    sweetNumber = 7;

    absNumber = (number - sweetNumber);
    if (absNumber < sweetNumber) {
      return number - sweetNumber;
    
    } else {
      return number * 2;
      
    }
  } catch (ex) {
    return ex;
  }
};



//  Problem 4: Finding Bad data.
// It will take a array of numbers and return bad data. Means negative numbers.

let findingBadData = function (array) {
  let badNum;
  try {
    if (typeof array !== "object") throw "Only accept array";
    badNum = array.filter((number) => number < 0);
    return badNum.length;
    
  } catch (ex) {
    return ex;
  }
};


//  Problem 5: Convert gems into diamond.
// It will take 3 numbers and calculate number of total diamonds.

let gemsToDiamond = function (a, b, c) {
  let totalDiamonds = 21 * a + 32 * b + 43 * c;
  if (totalDiamonds < 2000) {
   return totalDiamonds;
  } else {
   return totalDiamonds - 2000;
  }
};


