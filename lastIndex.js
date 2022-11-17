function lastIndexOf(value, target) {
	var match = false;
	var result = 0;
  for (var i = value.length - 1; i >= 0; i--) {
    if (value[i] === target) {
      result = i;
      match = true;
      break;
    }
  }
  if(match){
    return result;
  } 
  else {
    return -1;  
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([1], 3), "=?", -1);
console.log(lastIndexOf([3], 3), "=?", 0);