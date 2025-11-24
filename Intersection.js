// Intersection → [1,2,3] & [2,3] → [2,3]

var inputOne = [1,2,3]

var inputTwo = [2,3]
var inArr = [[1,2,3],[2,3],[1,2,4,5,8],[1]]

var a = inArr.reduce((a,i) => {
    if(i.length>a.length){
        a=i
    }
    return a
},[])
console.log(inArr.indexOf(a))

// var arr = []
// var count = 0

// var lengthOne = 0
// var lengthTwo = 0

// for(el of inputOne){
//     lengthOne++
// }

// for(el of inputTwo){
//     lengthTwo++
// }

// for(el of inputOne){
//     var isExe = false
//     for(e of arr){
//         if(e===el){
//             isExe=true
//         }
//     }

//     var isExeSec = false
//     for(e of inputTwo){
//         if(e===el){
//             isExeSec=true
//         }
//     }

//     if(!isExe && isExeSec){
//         arr[count]=el
//         count++
//     }
// }

// console.log(arr)