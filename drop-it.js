function dropElements(arr, func) 
{  
    while (arr.length > 0 && !func(arr[0]))
    {
        arr.shift();
    }

    return arr;
}
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1; }));

  //Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.
  //Return the filtered array.



//Drop it
//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
//dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
//dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
//dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
//dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].