
var input = [1,2,2,3,2,3] 
// var out = [1,2,3]

var arr = []
var length = 0
var count = 0

for(el of input){
    length++
}

for(el of input){
    var isExe = false
    for(let i=0; i<arr.length; i++){
        if(arr[i]===el){
            isExe=true
        }
    }
    if(!isExe){
        arr[count]=el
        count++
    }
}

console.log(arr)