let number = 600851475143;
let factor = number;

for (i < 2; i < Math.floor(factor / 2); i++) {
  if (factor % i === 0) factor /= i;
}
