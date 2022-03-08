// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {
  const newArr = [...arr];
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const newRemoved = [...arr];
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    newRemoved.splice(book_index, 1);
    return newRemoved;

    // Change code above this line
    }
}