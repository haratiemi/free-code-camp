function steamrollArray(arr)
{
//    let arr = [1, [2], [3, [[4]]]];
    let newArr = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (Array.isArray(arr[i]))
        {
            newArr = newArr.concat(steamrollArray(arr[i]));
        } else
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));


//Steamroller
//Flatten a nested array. You must account for varying levels of nesting.
//steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
//steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.