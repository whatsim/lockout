var crypt = require('crypto');
var fs = require('fs');

var filename = process.argv[2];
var encryptKey = process.argv[3];

fs.readFile(filename,{encoding:'utf8'},function(err,d){
	if(err) throw('Problem opening that file');
	else {
		var cipher = crypt.createDecipher('aes-128-cbc',encryptKey)
		cipher.update(d,'hex','utf8');
		var uncrypted = cipher.final('utf8')
		console.log(uncrypted);
	}	
});
