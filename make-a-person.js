const Person = function(firstAndLast) 
{
    // Only change code below this line
    // Complete the method below and implement the others similarly
    if (typeof(firstAndLast) === 'string')
    {
        let fullName = firstAndLast;
        let arrFullName = fullName.split(" ");
                         
        this.getFirstName = function ()
        {
            return fullName.split(" ")[0];
        };
        this.getLastName = function ()
        {
            return fullName.split(" ")[1];
        };
        this.getFullName = function()
        {
          return fullName;
        };
        this.setFirstName = function(firstName)
        {
          arrFullName[0] = firstName;  
          fullName = firstName + " " + arrFullName[1];
        };
        this.setLastName = function (lastName)
        {
          arrFullName[1] = lastName;  
          fullName = arrFullName[0]  + " " + lastName;
        };
        this.setFullName = function(Name)
        {        
           fullName = Name;
        };
    }  else
    {
        return undefined;
    }   
};
  
const bob = new Person('Bob Ross');
bob.getFullName();

/*
console.log(bob.getFullName()); //Bob Ross
console.log(Object.keys(bob).length); //6
console.log( bob instanceof Person); //true
console.log(bob.firstName); // undefined
console.log(bob.lastname); // undefined
console.log(bob.getFirstName()); //Bob
console.log(bob.getLastName()); //Ross
bob.setFirstName("Haskell");  
console.log(bob.getFullName()); //Haskell Ross
bob.setLastName("Curry"); 
console.log(bob.getFullName()); // Haskell Curry
bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); // Haskell Curry
console.log(bob.getFirstName()); // Haskell
console.log(bob.getLastName()); // Curry


Make a Person
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
No properties should be added. Object.keys(bob).length should always return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return the string Bob.
bob.getLastName() should return the string Ross.
bob.getFullName() should return the string Bob Ross.
bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
*/
