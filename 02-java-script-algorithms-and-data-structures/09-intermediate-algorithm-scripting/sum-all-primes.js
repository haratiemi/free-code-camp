
/*
Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {
	let array  = [];
	let primes = [];
	let result = 0;

	for (let i = 2; i <= num; ++i) {
		if (!array [i]) {
			primes.push(i);
			for (let j = i << 1; j <= num; j += i) {
				array[j] = true;
			}
		}
	}
	for (let k = 0; k < primes.length; k++) {
		result = result + primes[k];
	}
	return result;
  }
  
  sumPrimes(10);




