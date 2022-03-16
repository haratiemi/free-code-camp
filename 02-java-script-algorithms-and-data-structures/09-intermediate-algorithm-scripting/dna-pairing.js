function pairElement(str) {
	let Array = [];
	for (let i = 0; i < str.length; i++){
		switch (str[i]) {
			case 'A':
				Array.push(['A','T']);
				break;
			case 'T':
				Array.push(['T','A']);
				break;
			case 'C':
				Array.push(['C','G']);
				break;
			case 'G':
				Array.push(['G','C']);
				break;
			default:
				break;
			}
	}
  return Array;
}

pairElement("GCG");