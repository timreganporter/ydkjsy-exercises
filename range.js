function range(start, end) {
  start = Number(start) || 0;
  if (arguments.length === 2) {
    end = Number(end) || 0;
    return getRange(start, end);
  } else {
    return function(new_end) {
      return getRange(start, new_end);
    }
  }

  function getRange(start, end) {
    var arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
}

console.log("range(3,3) = " + range(3,3));
console.log("range(3,8) = " + range(3,8));
console.log("range(3,0) = " + range(3,0));

var start3 = range(3);
var start4 = range(4);

console.log("start3(3) = " + start3(3));
console.log("start3(8) = " + start3(8));
console.log("start3(0) = " + start3(0));
console.log("start4(6) = " + start4(6));
