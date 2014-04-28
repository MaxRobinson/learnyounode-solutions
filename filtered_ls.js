var fs = require('fs');
var path = require('path');

var thePath = process.argv[2];
fs.readdir(thePath, function(err, files){
	if(!err) {
		for(i = 0; i < files.length; i++) {
			var ending = path.extname(files[i]);
			if(ending === '.' + process.argv[3])
				console.log(files[i]);
		}
	}
});

/* Official solution

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list){
	list.forEach(function(file){
		if(path.extname(file) === '.' + process.argv[3]){
			console.log(file);
		}
	});
});

*/