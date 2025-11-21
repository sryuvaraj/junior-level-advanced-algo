var input = [1,2,3,4]
// var output = [4,3,2,1]

var output = []
var length = 0

for(el of input){
    length++
}

for(el of input){
    output[length-1]=el
    length--
}

console.log(output)