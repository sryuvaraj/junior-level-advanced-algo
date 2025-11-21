// Check sorted → [1,2,3] → true

var input = [1,2,3,4,7,8,]

var length = 0
for(el of input){
    length++
}

var resBool = true
for(let i=0; i<length; i++){
    if(input[i]>input[i+1]){
        resBool = false
    }
}

console.log(resBool)