let start = performance.now();
let sum = 2;
let current = 2;
let prev = 1;

for (i = 0; sum < 4e6; i++) {
  let upcoming = current + prev;
  if (upcoming % 2 === 0) sum += upcoming;

  prev = current;
  current = upcoming;
}

let end = performance.now();
console.log(sum, end - start);
