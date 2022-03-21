/*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str)
{
    let input  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let output = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
    let index = 0;
    let sentence = str.split(''); 
    let result = [];

    for (let i = 0; i < sentence.length; i ++)
    {
        if (/[\W_]/g.test(sentence[i]))
        {
            result.push(sentence[i]);
        }
        else
        {
            index = input.indexOf(sentence[i]);
            result.push(output[index]);
        }
    }
    result = result.join('');
   
    return result;
}
  
//rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC")); //should decode to the string FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); //should decode to the string FREE PIZZA!
console.log(rot13("SERR YBIR?")); //should decode to the string FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.