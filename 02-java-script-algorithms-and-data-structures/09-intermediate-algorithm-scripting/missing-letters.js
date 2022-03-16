function fearNotLetter(str) {
	let abcFull = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	//              0   1   2   3   4   5   6   7   8   9   10  11  12 13  14  15  16  17  18  19  20  21  22  23  24  25
	let abcPartial = [];
	let missing = '';
	let strArray = [];
	
	for (let i = 0; i < str.length; i++) {
		strArray.push(str[i]);
	}
	
	if (strArray === abcFull){
		abcPartial = abcFull;

	} else {
		abcPartial = abcFull.slice(abcFull.indexOf(str[0]),abcFull.indexOf(str[0])+ str.length);
	}
		
	for (let h = 0; h < strArray.length; h++) {
		if (strArray.indexOf(abcPartial[h]) === -1) {
			missing = abcPartial[h];
		} 
	}
	if (missing === ''){
		return undefined;
	} else {
	return missing;
	}
}
fearNotLetter("abce");