function destroyer(arr) {
  let args = Object.values(arguments).slice(1);
  for (let i= 0; i < arr.length; i++) {
    for (let h = 0; h < args.length; h++){
      if (arr[i] === args[h]){
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);