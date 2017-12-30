console.log("Array problem 2");
console.log("compare all the items in array, if there are the same ");

var i = ["a","a","a","a","a"];//input string

var outcome;//output string

function isSame(i){
  var proof = [];//array to save results
  var ind = i.length-1;//variable helping to steer the for loop
  for(ind; ind>0; ind--){
    if(i[ind] === i[ind-1]){
      proof.unshift(0);//write similar pair
  } else {
    proof.unshift(1);//write not similar pair
  }
  }
  /*
  console.log(proof);//print results
  */
  outcome = proof;//save result to utput string
}

var sume = 0;//variable with the sum of the outcome array fir decide function

function decide(){
  var ind = outcome.length;//variable helping to steer the for loop
  for(ind; ind>0; ind--){//for loop makinf the sum of numbers in the proof array
    sume = outcome[ind] + outcome[ind+1]
  }
}

//function to run results
function isUniform(){
  isSame(i);
  decide();
};

isUniform();

//If statement to valuate that string is uniform
if (sume == 0){
  console.log("RESULT: true")
} else if (sume ==1 ){
  console.log("RESULT: false")
} else {
  console.log("error")
}

/* first version

var i = ["a","a","a","b"];
function isUniform(i){
  var proof = [];
  var long = i.length-1;
  for(long; long>0; long--){
    if(i[long] === i[long-1]){
      console.log("true: "+ long)
  } else {
    console.log("false: "+ long)
  }
  }
}

isUniform(i);

*/
