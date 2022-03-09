function smallestCommons(arr)
{
    let min = 0;
    let max = 0;
    let array = [];
    let result = 0;

    
 //Máximo divisor comum (Greates Common Divisor)
    function mdc(a, b) 
    { 
	    return !b ? a : mdc(b, a % b);
    } 

 //Mínimo múltiplo comum (Least Common Multiple)
    function mmc(a, b) 
    {
	    return a * (b / mdc(a,b));
    }
    
 //array dos números a serem considerados
    if (arr[0] < arr[1]) 
    {
        min = arr[0];
        max = arr[1];
    } else 
    {
        min = arr[1];
        max = arr[0];   
    }

 // calculo do mmc do array
    for (let l = result = min; l <= max; l++)
    {
        result = mmc(l, result);
    }

    return result;
}
  
console.log(smallestCommons([23,18]));


//Smallest Common Multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

//smallestCommons([1, 5]) should return a number.
//smallestCommons([1, 5]) should return 60.
//smallestCommons([5, 1]) should return 60.
//smallestCommons([2, 10]) should return 2520.
//smallestCommons([1, 13]) should return 360360.
//smallestCommons([23, 18]) should return 6056820.