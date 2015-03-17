var modular = require("./modular")

var fileList = process.argv[2];
var extension = process.argv[3];

modular(fileList, extension, function(err, list) {

  if (err)
  return console.log('There was an error');


  list.forEach(function(file) {
    console.log(file);
  })
})
