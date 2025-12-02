// Missing number → [1,2,4,5] → 3

var input = [1, 2, 4, 5];
var len = 0;


var big = input[0];
for (el of input) {
  if (el > big) {
    big = el;
  }
}

var small = input[0];
for (el of input) {
  if (el < small) {
    small = el;
  }
}

var result = []
var count = 0

for(let i=1; i<=big; i++){
    var bool = false
    for(e of input){
        if(e===i){
            bool = true
            break
        }
    }

    if(!bool){
        result[count]=i
        count++
    }
}

console.log(result);
