console.log("Array problem 1");
console.log("Reverse print the items in a array");

var i = ["a","b","c","d"];
function printReverse(i){
  var long = i.length;
  for(long; long>0; long--){
  console.log(i[long-1]);
  }
}
printReverse(i);
