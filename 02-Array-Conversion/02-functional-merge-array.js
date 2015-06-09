var merge2dArrayIntoOne2 = function(arrays) {
  return arrays.reduce( function(p,n) {
    return p.concat(n);
  });
};
