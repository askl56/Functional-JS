// Another benefit of treating functions as first-class objects is the advent of anonymous functions.

// As the name might imply, anonymous functions are functions without names. But they are more than that.

// What they allow is the ability to define ad-hoc logic, on-the-spot and as needed.

// Usually, it's for the benefit of convenience; if the function is only referred to once, then a variable name doesn't need to be wasted on it.

// Some examples of anonymous functions are as follows:

// The standard way to write anonymous functions
function(){return "hello world"};

// Anonymous function assigned to variable
var anon = function(x,y){return x+y};

// Anonymous function used in place of a named callback function,
// this is one of the more common uses of anonymous functions.
setInterval(function(){console.log(new Date().getTime())}, 1000);
// Output:  1413249010672, 1413249010673, 1413249010674, ...

// Without wrapping it in an anonymous function, it immediately // execute once and then return undefined as the callback:
setInterval(console.log(new Date().getTime()), 1000)
// Output:  1413249010671

// A more involved example of anonymous functions used within higher-order functions:

function powersOf(x) {
  return function(y) {
    // this is an anonymous function!
    return Math.pow(x,y);
  };
}
powerOfTwo = powersOf(2);
console.log(powerOfTwo(1)); // 2
console.log(powerOfTwo(2)); // 4
console.log(powerOfTwo(3)); // 8

powerOfThree = powersOf(3);
console.log(powerOfThree(3));  // 9
console.log(powerOfThree(10)); // 59049

// The function that is returned doesn't need to be named; it can't be used anywhere outside the powersOf() function, and so it is an anonymous function.

// Remember our accumulator function? It can be re-written using anonymous functions.

var
  obj1 = {value: 1},
  obj2 = {value: 2},
  obj3 = {value: 3};

var values = (function() {
  // anonymous function
  var values = [];
  return function(obj) {
    // another anonymous function!
    if (obj) {
      values.push(obj.value);
      return values;
    }
    else {
      return values;
    }
  }
})(); // make it self-executing
console.log(values(obj1)); // Returns: [obj.value]
console.log(values(obj2)); // Returns: [obj.value, obj2.value]


