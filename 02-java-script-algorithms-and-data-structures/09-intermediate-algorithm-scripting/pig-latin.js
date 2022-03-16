/*
Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") should return the string aliforniacay.
translatePigLatin("paragraphs") should return the string aragraphspay.
translatePigLatin("glove") should return the string oveglay.
translatePigLatin("algorithm") should return the string algorithmway.
translatePigLatin("eight") should return the string eightway.
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
*/


function translatePigLatin(str) {
  let beginsVowel = /^[aeiou]\w*/; //começa com vogal ou a vogal está no meio da palavra
  let beginsConsonant = /(^[^aeiou]+)(\w*)/; //começa com consoante ou não tem vogais
  return str
    .replace(beginsVowel, "$&way") // adiciona o sufixo way
    .replace(beginsConsonant, "$2$1ay");//pega a segunda captura + a primeira captura e adciona o sufixo ay
}

translatePigLatin("consonant");

//^ símbolo utilizado para procurar o padrão no começo das strings
//[aeiou] chega as vogais
//\w procura todas as letras e números, inclui _
//+ procura por um ou mais caracteres
//* para procurar 0 ou mais caracteres
//$ acessa os grupos de captura do padrão substituído