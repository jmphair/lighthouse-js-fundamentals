function range(start, end, step) {
  var array = [];
  if (start < end && step >= 0 && typeof start === "number" && typeof end === "number" && typeof step === "number") {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
    return array;
  } else {
      return [];
    }
  }

console.log(range(0, 10, 2))

