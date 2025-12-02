//  Filter even →  → [2,4]

const input = [1,2,3,4]

var result = []
var count = 0

for(el of input){
    if(el%2===0){
        result[count]=el
        count++
    }
}

console.log(result)