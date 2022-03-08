function largestOfFour(arr) {
  
  let newArr = [];
  for (let i = 0; i <= 3; i++){
    let largest = arr[i][0];
    for (let h = 1; h < arr[i].length; h++){
      if ( arr[i][h] > largest){
        largest = arr[i][h];
      }
    }
    newArr[i] = largest;
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

