// Max → [10,5,8] → 10

var input = [10,5,8]
var len = 0

for(el of input){
    len++
}

for(let i=0; i<len; i++){
    for(let j=0; j<len-i; j++){
        if(input[j]>input[j+1]){
            var tem = input[j]
            input[j]=input[j+1]
            input[j+1]=tem
        }
    }
}

console.log(input[len-1])