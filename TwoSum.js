// Two sum → [2,7,11,15],9 → [0,1]

var input = [2, 7, 11, 15];
var target = 18;
var arr = [];
var count = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 1; i < input.length; i++) {
    var sum = input[i] + input[j];
    if (sum === target) {
      arr[0] = input[i];
      arr[1] = input[j];
    }
  }
}

console.log(arr);
