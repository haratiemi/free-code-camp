function diffArray(arr1, arr2) {
  const newArr = [];

  function justInFirst(first, second){
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  justInFirst(arr1, arr2);
  justInFirst(arr2, arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);