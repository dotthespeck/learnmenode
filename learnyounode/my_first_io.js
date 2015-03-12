var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString();
var toArray = string.split("\n");
var finalAnswer = toArray.length - 1;

console.log(finalAnswer);

var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
