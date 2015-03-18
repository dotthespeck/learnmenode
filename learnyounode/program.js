var modular = require("./modular")

var fileList = process.argv[2];
var extension = process.argv[3];

modular(fileList, extension, function(err, files) {
  if(err)
  return err;

  files.forEach(function (file) {
    console.log(file);
  });
});
