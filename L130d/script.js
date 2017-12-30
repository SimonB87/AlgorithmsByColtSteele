console.log("Array problem 4");
console.log("Find maximum in the array");

var numArray = [1,2,3,4,5,6];


function getMaxOfArray(numArray) {
  console.log( Math.max.apply(null, numArray) );
}

getMaxOfArray(numArray);
