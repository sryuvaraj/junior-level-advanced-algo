const input = [1, 2, 3, 4];
const chunk = 2;

var result = [];
var resCount = 0;

var arr = [];
var count = 0;

var len = input.length;

for (el of input) {
  arr[count] = el;
  count++;

  // when chunk is full
  if (count === chunk) {
    result[resCount] = arr;
    resCount++;
    count = 0;
    arr = [];
  }

  // when last element and arr is not yet pushed
  if (el === input[len - 1] && count !== 0) {
    console.log(el, "ld");
    result[resCount] = arr;
  }
}

console.log(result); // [[1, 2], [3, 4]]
