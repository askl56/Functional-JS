// Self-invoking functions are actually a form of higher-order functions. Higher-order functions are functions that either take another function as the input or return a function as the output.

// Higher-order functions are not common in traditional programming. While an imperative programmer might use a loop to iterate an array, a functional programmer would take another approach entirely. By using a higher-order function, the array can be worked on by applying that function to each item in the array to create a new array.

// This is the central idea of the functional programming paradigm. What higher-order functions allow is the ability to pass logic to other functions, just like objects.

// Functions are treated as first-class citizens in JavaScript, a distinction JavaScript shares with Scheme, Haskell, and the other classic functional languages. This may sound bizarre, but all this really means is that functions are treated as primitives, just like numbers and objects. If numbers and objects can be passed around, so can functions.

// To see this in action, let's use a higher-order function with our ValueAccumulator() function from the previous section:

// using forEach() to iterate through an array and call a
// callback function, accumulator, for each item
var accumulator2 = ValueAccumulator();
var objects = [obj1, obj2, obj3]; // could be huge array of objects
objects.forEach(accumulator2);
console.log(accumulator2());
