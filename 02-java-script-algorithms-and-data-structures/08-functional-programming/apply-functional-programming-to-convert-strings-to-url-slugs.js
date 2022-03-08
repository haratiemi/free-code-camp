// Only change code below this line
function urlSlug(title) {
  return title
    .toLowerCase() //converte tudo para minusculo
    .trim() // remove os espaços
    .split(/\s+/) //converte a string em array, desconsiderando os espaços
    .join("-"); // combina o array in string separando as palavras por hifen

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");