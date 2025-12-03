// Flatten array → [1,[2,[3]]] → [1,2,3]

const input = [[1, [2, [3]]]];

var arr = [];
var count = 0;

for (el of input) {
  if (el / el === 1) {
    arr[count] = el;
    count++;
  } else {
    for (e of el) {
      if (e / e === 1) {
        arr[count] = el;
        count++;
      } else {
        for (e of el) {
          if (e / e === 1) {
            arr[count] = el;
            count++;
          }
        }
      }
    }
  }
}

console.log([...input], "j");

