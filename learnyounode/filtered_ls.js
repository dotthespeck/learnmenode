var fs = require('fs');
var path = require('path');

var fileDir = process.argv[2];
var filterBy = ("." + process.argv[3]);

fs.readdir(fileDir, function(err,directory) {
  for (i = 0; i < directory.length; i++) {
    if (path.extname(directory[i]) === filterBy) {
      console.log(directory[i]);
  }
}
});

var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
