var fs = require('fs');
var fileContents = process.argv[2];

fs.readFile(fileContents, 'utf8', function(err,fileInput) {
var string = fileInput.toString();
var toArray = string.split("\n");
var finalAnswer = toArray.length - 1;
console.log(finalAnswer)
  });
