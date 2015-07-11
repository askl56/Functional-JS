var words = [];
var words = myString.split(' ').filter(function(x){
  return (! x.match(/[1-9]+/));
}).slice(0,4);
console.log(words);


// Or with a library of functional programming utilities,
// they can be simplified even further.

var words = toSequence(myString).match(/[a-zA-Z]+/).first(4)

// The key to identifying functions that can be written in a more functional way is to
// look for loops and temporary variables, such as words and count
// instances in the preceding example.
