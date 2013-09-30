A way to make passwords you don't know.
=======================================

I don't think this is a terribly robust or secure way to do this, but as an exercise. 

run

	node lockout.js FILENAME ENCRYPTKEY

to generate a random password copied to clipboard and saved encrypted to FILENAME. paste that in to a password field on a website somewhere, and put the encrypted password file somewhere safe.

run

	node unlock.js FILENAME ENCRYPTKEY

to decipher the encrypted stored copy of the password.
