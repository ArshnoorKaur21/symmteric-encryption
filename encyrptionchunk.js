const crypto = require('crypto');
const algorithm = 'aes-192-cbc';

const password = 'bncaskdbvasbvlaslslasfhj';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = '';
cipher.on('readable', () => {
let chunk;
while (null !== (chunk = cipher.read())) {
	encrypted += chunk.toString('base64');
}
});

cipher.on('end', () => {
console.log(encrypted);
});

cipher.write('CS-Portal');
cipher.end();
console.log("done");
