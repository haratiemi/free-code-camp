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