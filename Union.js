//  Union → [1,2] & [2,3] → [1,2,3]

var inputOne = [1, 2];
var inputTwo = [2, 3];

var arr = [];
var count = 0;

var lenInpOne = 0;
for (el of inputOne) {
  lenInpOne++;
}

for (el of inputTwo) {
  inputOne[lenInpOne] = el;
  lenInpOne++;
}

for (el of inputOne) {
  var bool = false;
  if (arr.length > 0) {
    for (e of arr) {
      if (e === el) {
        bool = true;
      }
    }
  }

  if (!bool) {
    arr[count] = el;
    count++;
  }
}

console.log(arr);
