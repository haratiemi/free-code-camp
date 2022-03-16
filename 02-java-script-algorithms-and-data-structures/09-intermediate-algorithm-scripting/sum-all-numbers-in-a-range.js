function sumAll(arr) {
  const arrOrdered = arr.sort(function (a,b) {
    return a === b ? 0 : a < b ? -1: 1;
  }) ;
  let sumAcum = 0;
  for (let i = arr[0]; i <= arr[1]; i++ ) {
    sumAcum += i;
  }
  return sumAcum;
}

sumAll([1, 4]);