const crypto=require('crypto')
const { enc } = require('crypto-js')
const algorithm='aes-256-cbc'
const key=crypto.randomBytes(32)
const iv=crypto.randomBytes(16)

function encrypt(text)
{
    let cipher=crypto.createCipheriv(algorithm,Buffer.from(key),iv)
    let encrypted=cipher.update(text)
    encrypted=Buffer.concat([encrypted,cipher.final()])
    return{iv:iv.toString('hex'),encryptedData:encrypted.toString('hex')}
}

//displaying output
var output=encrypt('ArshnoorKaur')
console.log(output)