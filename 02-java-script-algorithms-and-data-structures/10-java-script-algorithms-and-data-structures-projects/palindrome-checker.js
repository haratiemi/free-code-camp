/*
Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false.
*/

function palindrome(str)
{
  let strNew = [];
  let strReverse = [];
    
  strNew = str.toLowerCase().replace(/[\W_]/g,'')
 //converte tudo para minusculo
 //substitui tudo que não for alphanumerico 

  strReverse = strNew.split('').reverse().join('');
  //converte a string em array
  //reverte o array
  //junta os elementos do array em string

  return strNew === strReverse;
  console.log(str);
  console.log(strNew);
  console.log(strReverse);
}
  
//palindrome("eye");

  
console.log(palindrome("eye")); // true
console.log(palindrome("_eye"));//true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); //false
console.log(palindrome("A man, a plan, a canal. Panama"));//true
console.log(palindrome("never odd or even")); //true
console.log(palindrome("nope")); //false
console.log(palindrome("almostomla")); //false
console.log(palindrome("My age is 0, 0 si ega ym."));//true
console.log(palindrome("1 eye for of 1 eye.")); //false
console.log(palindrome("0_0 (: /-\ :) 0-0"));//true
console.log(palindrome("five|\_/|four")); //false
