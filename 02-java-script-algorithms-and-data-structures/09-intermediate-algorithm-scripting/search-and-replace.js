function myReplace(str, before, after) {
	let myRegex = /^[A-Z]/;
	
	if (myRegex.test(before)) {
		after = after[0].toUpperCase() + after.substring(1);
	} else {
		after = after.toLowerCase();
	}
	return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");