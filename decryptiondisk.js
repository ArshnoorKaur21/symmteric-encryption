const crypto = require('crypto');
const fs=require('fs')

const algorithm = 'aes-192-cbc';
const password = 'arshnoorkaur';
const key = crypto.scryptSync(password, 'salt', 24);
const iv =crypto.randomBytes(16)

const decipher = crypto.createDecipheriv(algorithm, key, iv);

const filetoEncrypt='home.txt'
const readablestream=fs.createReadStream(filetoEncrypt,'utf-8')

readablestream.on('error',function(error){
	console.log(error)
})

readablestream.on('data',(chunk)=>{
	console.log(chunk)
})

const writablestream = fs.createWriteStream(filetoEncrypt.slice(0,filetoEncrypt.length-4),'base64');
writablestream.on('error',(error)=>{
	console.log(error)
})

readablestream.pipe(decipher).pipe(writablestream)
fs.unlinkSync(filetoEncrypt)
console.log('decryption successful')

