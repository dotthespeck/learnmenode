var orgNumbers = process.argv;
var spliced = orgNumbers.splice(0, 2);

var integers = orgNumbers.map(Number);

var total = integers.reduce(function(a, b) {
  return a + b;
});

console.log(total);


Official solution:

var result = 0

    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])

    console.log(result)
