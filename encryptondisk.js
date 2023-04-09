const { error } = require('console');
const crypto = require('crypto');
const fs=require('fs')

const algorithm = 'aes-192-cbc';
const password = 'arshnoorkaur';
const key = crypto.scryptSync(password, 'salt', 24);
const iv =crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv);

const filetoEncrypt='home.txt'
const readablestream=fs.createReadStream(filetoEncrypt,'utf-8')

readablestream.on('error',function(error){
	console.log(error)
})

readablestream.on('data',(chunk)=>{
	console.log(chunk)
})

const writablestream = fs.createWriteStream(`${filetoEncrypt}.sec`,'hex');
writablestream.on('error',(error)=>{
	console.log(error)
})

readablestream.pipe(cipher).pipe(writablestream)
console.log('encryption successful')

