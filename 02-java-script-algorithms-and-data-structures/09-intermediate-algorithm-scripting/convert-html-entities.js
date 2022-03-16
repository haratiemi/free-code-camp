function convertHTML(str) {
	var strSplit = str.split("");
	
	for (var i = 0; i < strSplit.length; i++) {
		switch (strSplit[i]) {
			case '&':
				strSplit[i] = '&amp;';
				break;
			case '<':
				strSplit[i] = '&lt;';
				break;
			case '>':
				strSplit[i] = '&gt;';
				break;
			case '"':
				strSplit[i] = '&quot;';
				break;
			case "'":
				strSplit[i] = '&apos;';
				break;			
		}
	}
	strSplit = strSplit.join("");
	
  return strSplit
  ;
}

convertHTML("Dolce & Gabbana");





//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
//convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
//convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
//convertHTML("Schindler's List") should return the string Schindler&apos;s List.
//convertHTML("<>") should return the string &lt;&gt;.
//convertHTML("abc") should return the string abc.