// Merge sorted → [1,3,5] & [2,4,6] → merged

var inputOne = [1,3,5]
var inputTwo = [2,4,6]
var count = inputOne.length
for(el of inputTwo){
    inputOne[count]=el
    count++
}

console.log(inputOne.sort())