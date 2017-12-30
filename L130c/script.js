console.log("Array problem 3");
var i = [1,2,3,4,5,6,7,8,9,10];
function sumeArray(i){
  var sume = 0;
  for(long = i.length-1; long>-1; long--){
    sume=sume+i[long];
    //console.log(sume);
  };
  console.log(sume);
}
sumeArray(i);
