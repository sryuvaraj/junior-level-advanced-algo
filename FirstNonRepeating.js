const input = [6, 6, 2, 2, 3, 1];

var big = input[0]
for(el of input){
  if(el>big){
    big=el
  }
}

var small = input[0]
for(el of input){
  if(el<small){
    small=el
  }
}

var result = input[0]

for(let i = small; i<=big; i++){
  var p = input[i-1]
  var c = input[i]
  var n = input[i+1]
  if((p===c)||(c===n)){
    // console.log(c)
  }
  else{
    result=c
    break
  }
}


console.log(result)
