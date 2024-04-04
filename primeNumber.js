function PrimeNo(n) {
  if (n === 1) {
    return false;
  } //1 is not a prime
  var i,
    flag = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      flag += 1;
    }
  }
  if (flag == 2) {
    console.log(n + " is prime number");
  } else {
    console.log(n + " is not a prime number");
  }
}

console.log(PrimeNo(10));
