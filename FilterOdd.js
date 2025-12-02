// Filter odd → [1,2,3] → [1,3]

const input = [1,2,3]

var result = []
var count = 0

for(el of input){
    if(el%2!=0){
        result[count]=el
        count++
    }
}

console.log(result)
