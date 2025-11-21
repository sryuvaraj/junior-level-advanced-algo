var input = [4, 7, 1, 9, 2];

// using inbuild method
// input.sort().reverse()
// console.log(input[1],"using inbuild method")

// without using inbuild method
var length = 0;
var arr = [];
for (el of input) {
  length++;
}

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length - 1; j++) {
    if (input[j] > input[j + 1]) {
      let t = input[j];
      input[j] = input[j + 1];
      input[j + 1] = t;
    }
  }
}

var resArr = [];
for (el of input) {
  resArr[length - 1] = el;
  length--;
}
console.log(resArr[1]);
