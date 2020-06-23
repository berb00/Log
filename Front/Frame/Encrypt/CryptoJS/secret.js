const CryptoJS = require('./crypto-js');  //引用AES源码js

const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123413');   //十六位十六进制数作为密钥偏移量

//解密方法
function Decrypt(word) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

//加密方法
function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { 
        iv: iv, 
        mode: CryptoJS.mode.CBC, // Block Modes:    CBC(default) CFB CTR OFB ECB
        padding: CryptoJS.pad.Pkcs7 // Block Padding:   Pkcs7(default) Iso97971 AnsiX923 Iso10126 ZeroPadding NoPadding
    });
    return encrypted.ciphertext.toString().toUpperCase();
}

function TranslateEncodingformat () { // 编码格式转换:Base64、Latin1、Hex、Utf8、Utf16、Utf16LE
    // 各种格式的明文值(srcs参数)
    let words = CryptoJS.enc.Base64.parse("SGVsbG8sIFdvcmxkIQ==");
    let base64 = CryptoJS.enc.Base64.stringify(words);
    console.log('words-base64', words, base64);

    words1 = CryptoJS.enc.Latin1.parse("Hello, World!")
    let latin1 = CryptoJS.enc.Latin1.stringify(words1)
    console.log('words-latin1', words1, latin1)

    words = CryptoJS.enc.Hex.parse("Hello, World!");
    let hex = CryptoJS.enc.Hex.stringify(words);
    console.log('words-hex', words, hex);

    words = CryptoJS.enc.Utf8.parse("𔭢");
    let utf8 = CryptoJS.enc.Utf8.stringify(words);
    console.log('words-utf8', words, utf8);

    words = CryptoJS.enc.Utf16.parse("Hello, World!");
    let utf16 = CryptoJS.enc.Utf16.stringify(words);
    console.log('words-utf16', words, utf16);

    words = CryptoJS.enc.Utf16LE.parse("Hello, World!");
    let utf16le = CryptoJS.enc.Utf16LE.stringify(words);
    console.log('words-utf16le', words, utf16le);
}

function HashingAlgorithms (msg) {
    msg = msg || 'Message';
    let md5 = CryptoJS.MD5(msg);                         
    let sha1 = CryptoJS.SHA1(msg);
    let sha3 = CryptoJS.SHA3(msg, { outputLength: 512 });
    let sha256 = CryptoJS.SHA256(msg);
    let sha512 = CryptoJS.SHA512(msg);
    let ripemd160 = CryptoJS.RIPEMD160(msg);

    console.log('md5========', md5)
    // console.log('sha1=======', sha1)
    // console.log('sha3=======', sha3)
    console.log('sha256=====', sha256)
    // console.log('sha512=====', sha512)
    // console.log('ripemd160==', ripemd160)
}

function HMAC () { // Keyed-hash message authentication codes
    var hash = CryptoJS.HmacMD5("Message", "Secret Passphrase");

    // HmacSHA1 键控哈希算法（密钥与消息数据混合）
    var hash = CryptoJS.HmacSHA1("Message", "Secret Passphrase");
    var hash = CryptoJS.HmacSHA256("Message", "Secret Passphrase");
    var hash = CryptoJS.HmacSHA512("Message", "Secret Passphrase");
}

function ProgressiveHMAC () { // 增量计算哈希值(加密较大的文件时一次性读取会占用较多内存)
    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, "Secret Passphrase");
    hmac.update("Message Part 1");
    hmac.update("Message Part 2");
    hmac.update("Message Part 3");
    ​
    var hash = hmac.finalize();
}

function PBKDF2 () { // a password-based key derivation function
    var salt = CryptoJS.lib.WordArray.random(128 / 8);
    var key128Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, {
      keySize: 128 / 32
    });
    var key256Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, {
      keySize: 256 / 32
    });
    var key512Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, {
      keySize: 512 / 32
    });
    var key512Bits1000Iterations = CryptoJS.PBKDF2("Secret Passphrase", salt, {
      keySize: 512 / 32,
      iterations: 1000
    });
}

function CipherAlgorithms () {
    // AES 高级加密标准，是下一代的加密算法标准，速度快，安全级别高
    var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
    var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");

    // DES 数据加密标准，适用于大量数据加密
    var encrypted = CryptoJS.DES.encrypt("Message", "Secret Passphrase");
    var decrypted = CryptoJS.DES.decrypt(encrypted, "Secret Passphrase");

    // Triple DES 是DES的增强版
    var encrypted = CryptoJS.TripleDES.encrypt("Message", "Secret Passphrase");
    var decrypted = CryptoJS.TripleDES.decrypt(encrypted, "Secret Passphrase");

    // Rabbit
    var encrypted = CryptoJS.Rabbit.encrypt("Message", "Secret Passphrase");
    var decrypted = CryptoJS.Rabbit.decrypt(encrypted, "Secret Passphrase");

    // RC4 流加密算法，密钥长度可变
    var encrypted = CryptoJS.RC4.encrypt("Message", "Secret Passphrase");
    var decrypted = CryptoJS.RC4.decrypt(encrypted, "Secret Passphrase");

    // RC4Drop
    var encrypted = CryptoJS.RC4Drop.encrypt("Message", "Secret Passphrase");
    var encrypted = CryptoJS.RC4Drop.encrypt("Message", "Secret Passphrase", {drop: 3072 / 4});
    var decrypted = CryptoJS.RC4Drop.decrypt(encrypted, "Secret Passphrase", {drop: 3072 / 4});
    console.log(decrypted)
}

function ProgressiveCiphering () {
    var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
    var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    ​
    // encrypt
    var aesEncryptor = CryptoJS.algo.AES.createEncryptor(key, { iv: iv });
    ​
    var ciphertextPart1 = aesEncryptor.process("Message Part 1");
    var ciphertextPart2 = aesEncryptor.process("Message Part 2");
    var ciphertextPart3 = aesEncryptor.process("Message Part 3");
    var ciphertextPart4 = aesEncryptor.finalize();
    ​
    // decrypt
    var aesDecryptor = CryptoJS.algo.AES.createDecryptor(key, { iv: iv });
    ​
    var plaintextPart1 = aesDecryptor.process(ciphertextPart1);
    var plaintextPart2 = aesDecryptor.process(ciphertextPart2);
    var plaintextPart3 = aesDecryptor.process(ciphertextPart3);
    var plaintextPart4 = aesDecryptor.process(ciphertextPart4);
    var plaintextPart5 = aesDecryptor.finalize();
}







module.exports = {
    Decrypt,
    Encrypt,
    TranslateEncodingformat,
    HashingAlgorithms,
    HMAC,
    ProgressiveHMAC,
    PBKDF2,
    CipherAlgorithms,
    ProgressiveCiphering

}
