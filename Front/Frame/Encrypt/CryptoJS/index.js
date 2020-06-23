const crypt = require('./secret');

let word = 'hello world!';

let wordencrypt = crypt.Encrypt(word);
console.log('wordencrypt:   ', wordencrypt);

let worddecrypt = crypt.Decrypt(wordencrypt);
console.log('worddecrypt:   ', worddecrypt);


crypt.TranslateEncodingformat()
crypt.HashingAlgorithms()
crypt.HMAC()
crypt.ProgressiveHMAC()
crypt.PBKDF2()
crypt.CipherAlgorithms()
crypt.ProgressiveCiphering()

