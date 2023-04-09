const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const password = 'bncaskdbvasbvlaslslasfhj';
const key = crypto.scryptSync(password, 'GfG', 24);
const iv = Buffer.alloc(16, 0);

const decipher =crypto.createDecipheriv(algorithm, key, iv);

let decrypted = '';

// Reading data
decipher.on('readable', () => {
let chunk;
while (null !== (chunk = decipher.read())) {
	decrypted += chunk.toString('utf8');
}
});

// Handling end event
decipher.on('end', () => {
console.log(decrypted);
});

// Encrypted data which is to be decrypted
const encrypted =
'MfHwhG/WPv+TIbG/qM78qA==';

decipher.write(encrypted, 'base64');
decipher.end();
