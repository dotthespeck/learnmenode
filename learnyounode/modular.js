var fs = require('fs');
var path = require('path');


module.exports = function (fileList, extension, callback) {

fs.readdir(fileList, function(err,directory) {

  if (err)
  return callback(err);

  for (i = 0; i < directory.length; i++) {
    if (path.extname(directory[i]) === '.' + extension) {
      console.log(directory[i]);
  }

  callback(null, list)
  }
});
}
