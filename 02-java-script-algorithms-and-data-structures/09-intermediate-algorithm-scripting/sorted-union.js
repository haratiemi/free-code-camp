function uniteUnique(arr) {
	let newArray = [];
	
	for(let i = 0; i < arguments.length; i++) {
		for (let h = 0; h < arguments[i].length; h++) {
			if (newArray.indexOf(arguments[i][h]) === -1) {
				newArray.push(arguments[i][h]);
			}
		}
	}
  return newArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);