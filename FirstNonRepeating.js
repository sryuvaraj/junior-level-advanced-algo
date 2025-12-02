const input = [6, 6, 2, 2, 3];

let first = -1;

for (let i = 0; i < input.length; i++) {
  let count = 0;
  for (let j = 0; j < input.length; j++) {
    if (input[i] === input[j]) {
      count++;
    }
  }
  if (count === 1) {
    first = input[i];
    break;
  }
}

console.log(first);  // 3
