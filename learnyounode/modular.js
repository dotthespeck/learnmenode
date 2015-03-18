var fs = require('fs');
var path = require('path');
var fileArray = [];


module.exports = function(fileList, extension, callback) {

fs.readdir(fileList, function(err,directory) {

  if (err)
  return callback(err);

  var filteredFiles = files.filter(function (file) {}
   return path.extname(file) === "." + extension;)
  }

  callback(null, filteredFiles);
  }
});
}
