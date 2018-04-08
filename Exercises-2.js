var input = "hello world!";

function balikString(inputParam){
  var i = (input.length);
  var j = "";
  for(i; i>=1; i--){
    j = j + (input[i-1]);
  }
  return j;
}

console.log (balikString(input));
