function factorialize(num) {
  let calc = 1;
  for (let i = 1 ; i <= num; i++) {
    calc = calc * i;
  }
  return calc;
}

factorialize(5);