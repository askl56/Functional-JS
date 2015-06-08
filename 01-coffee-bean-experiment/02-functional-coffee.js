// Separate the data and logic from the interface

var printPrice = function(price, label) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(label+' price: $'+price);
  node.appendChild(textnode);
  document.getElementById('products 2').appendChild(node);
}

// Create function objects for each type of coffee

var columbian = function(){
  this.name = 'columbian';
  this.basePrice = 5;
};

var frenchRoast = function(){
  this.name = 'french roast';
  this.basePrice = 8;
};

var decaf = function(){
  this.name = 'decaf';
  this.basePrice = 6;
};

// Create object literals for the different sizes

var small = {
  getPrice: function(){return this.basePrice + 2},
  getLabel: function(){return this.name + ' small'}
};

var medium = {
  getPrice: function(){return this.basePrice + 4},
  getLabel: function(){return this.name + ' medium'}
};

var large = {
  getPrice: function(){return this.basePrice + 6},
  getLabel: function(){return this.name + ' large'}
};

// Put all the coffee types and sizes into arrays

var coffeeTypes = [columbian, frenchRoast, decaf];
var coffeeSizes = [small, medium, large];

// Build new objects that are combinations of the above.
// and put them into a new array.
var coffees = coffeeTypes.reduce(function(previous, current) {
  var newCoffee = coffeeSizes.map(function(mixin) {
    var newCoffeeObj = plusMixin(current, mixin);
    return new newCoffeeObj();
  });
  return previous.concat(newCoffee);
},[]);

// We've now defined how to get the price and label for
// each coffee type and size combination, we can just print them
coffees.forEach(function(coffee){
  printPrice(coffee.getPrice(),coffee.getLabel());
});

