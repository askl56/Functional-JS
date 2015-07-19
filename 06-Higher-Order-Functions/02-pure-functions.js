// Pure functions return a value computed using only the inputs passed to it. Outside variables and global states may not be used and there may be no side effects. In other words, it must not mutate the variables passed to it for input. Therefore, pure functions are only used for their returned value.

// A simple example of this is a math function. The Math.sqrt(4) function will always return 2, does not use any hidden information such as settings or state, and will never inflict any side effects.

// Pure functions are the true interpretation of the mathematical term for 'function', a relation between inputs and an output. They are simple to think about and are readily re-usable. Because they are totally independent, pure functions are more capable of being used again and again.

// To illustrate this, compare the following non-pure function to the pure one.

// function that prints a message to the center of the screen
var printCenter = function(str) {
  var elem = document.createElement("div");
  elem.textContent = str;
  elem.style.position = 'absolute';
  elem.style.top = window.innerHeight/2+"px";
  elem.style.left = window.innerWidth/2+"px";
  document.body.appendChild(elem);
};
printCenter('hello world');

// pure function that accomplishes the same thing

var printSomewhere = function(str, height, width) {
  var elem = document.createElement("div");
  elem.textContent = str;
  elem.style.position = 'absolute';
  elem.style.top = height;
  elem.style.left = width;
  return elem;
};
document.body.appendChild(printSomewhere('hello world', window.innerHeight/2)+10+"px",window.innerWidth/2)+10+"px")
);


// While the non-pure function relies on the state of the window object to compute the height and width, the pure, self-sufficient function instead asks that those values be passed in. What this actually does is allow the message to be printed anywhere, and this makes the function much more versatile.

// And while the non-pure function may seem like the easier option because it performs the appending itself instead of returning an element, the pure function printSomewhere() and its returned value play better with other functional programming design techniques.

var messages = ['Hi', 'Hello', 'Sup', 'Hey', 'Hola'];
messages.map(function(s,i){
  return printSomewhere(s, 100*i*10, 100*i*10);
}).forEach(function(element) {
  document.body.appendChild(element);
});
