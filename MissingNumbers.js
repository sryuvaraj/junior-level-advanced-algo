// Missing number → [1,2,4,5] → 3

var input = [1,2,4,5]
var max = Math.max(...input)
var missedNumbers = []
for(let i=input[0]; i<max; i++){
    var isExe = input.includes(i)
    if(!isExe){
        missedNumbers.push(i)
    }
}
console.log(missedNumbers)