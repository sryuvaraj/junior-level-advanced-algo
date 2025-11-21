// Rotate array → [1,2,3,4,5], k=2 → [4,5,1,2,3]

var input = [1,1,2,3,4,5,5] 
var k = 2

// using inbuilt functions
// var arrOne = input.splice(input.length-k)
// console.log([...arrOne,...input])


var length = 0
for(el of input){
    length++
}

var iniLength = length-k

var arrOne =[]
var count = 0
for(let i=0; i<iniLength; i++){
    arrOne[count]=input[i]
    count++
}

var arrTwo=[]
count=0
for(let i=iniLength; i<=length-1; i++){
    arrTwo[count]=input[i]
    count++
}

for(el of arrOne){
    arrTwo[count]=el
    count++
}

console.log(arrTwo)