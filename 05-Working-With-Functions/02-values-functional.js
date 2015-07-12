var ValueAccumulator = function() {
  var values = [];
  var accumulate = function(obj) {
    if (obj) {
      values.push(obj.value);
      return values;
    }
    else {
      return values;
    }
  };
  return accumulate;
};

//This allows us to do this:
var accumulator = ValueAccumulator();
accumulator(obj1);
accumulator(obj2);
console.log(accumulator());
// Output: [obj1.value, obj2.value]
