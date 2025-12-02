// First repeating → [1,2,3,2,4] → 2

const input = [1,2,3,2,4]

var arr = []
var count = 0
var ex = input[0]
for(el of input){
    var bool = false
    for(e of arr){
        if(el === e){
            bool = true
        }
    }
    if(bool){
        ex=el
        break
    }
    else{
        arr[count]=el
        count++
    }
}

console.log(ex)