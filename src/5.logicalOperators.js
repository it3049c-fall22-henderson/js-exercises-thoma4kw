// use the logical operator not if statements

// or: should return true if either a or b are truthy. False, if both are false
function or(a , b){
return a==true|| b==true;
}

function and(a,b){
  return a==true&&b==true;
}
  
  
  var a = true;
  var b = false;
  
module.exports ={
  or,
  and
};