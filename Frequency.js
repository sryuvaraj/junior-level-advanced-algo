// Frequency → [1,1,2] → {1:2,2:1}

var input = [1,1,2]

var obj = {}

// inbuilt method
// for(el of input){
//     if(obj.hasOwnProperty(el)){
//         obj[el]= obj[el]+1
//     }
//     else{
//         obj[el]=1
//     }
// }


for(el of input){
        if(obj[el]){
            obj[el]=obj[el]+1
        }
        else{
            obj[el]=1
        }
}

console.log(obj)