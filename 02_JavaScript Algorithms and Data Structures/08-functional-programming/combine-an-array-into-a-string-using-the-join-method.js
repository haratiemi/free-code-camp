function sentensify(str) {
  // Only change code below this line
  const arr = str.split(/\W/);
  const newStr = arr.join(" ");
  return newStr;
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");