// Min → [10,5,8] → 5

var input = [10,5,8]
var len = 0

for(el of input){
    len++
}

for(let i=0; i<len; i++){
    for(let j=0; j<len-i; j++){
        if(input[j]>input[j+1]){
            var t = input[j]
            input[j]=input[j+1]
            input[j+1]=t
        }
    }
}

console.log(input[0])