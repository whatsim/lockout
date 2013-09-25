var cp = require("copy-paste").noConflict()
var crypt = require('crypto');
var fs = require('fs');

var filename = process.argv[2];
var encryptKey = process.argv[3];

createPass(12);

function createPass(len){
	crypt.randomBytes(len/2, function(err, buf) {
		if(err) throw(err)
		var pass = buf.toString('hex');
		completePass(pass)
	});	
}

function completePass(pass){
	var cipher = crypt.createCipher('aes-128-cbc',encryptKey)
	cipher.update(pass,'utf8','hex')
	var crypted = cipher.final('hex')
	
	fs.writeFile(filename, crypted, function(err) {
    if(err) {
	        console.log("Couldn't save! Don't use whatever is in the clipboard for a password! It'd probably be bad!");
	        cp.copy('');
	    } else {
	        console.log("The file was saved!");
	        cp.copy(pass);
	    }
	}); 
	
}

