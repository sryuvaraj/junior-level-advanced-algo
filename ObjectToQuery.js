// Object to query → {a:1,b:2} → 'a=1&b;=2'

var obj = {a:1,b:2}

var res = 0
// var c =0
// var count = 0
// for(key in obj){
//     count++
// }

// for(key in obj){
//     res=res+key+"="+obj[key]
//     c++
//     if(count>c){
//         res=res+"&"
//     }
// }

var a = 6
var p = 0

var c = 1
var n = 0
var resArr = []
var count = 0
for(let i=0; i<=a; i++){
    n = p+c
    resArr[count]= p
    count++
    p=c
    c=n
}

console.log(resArr)