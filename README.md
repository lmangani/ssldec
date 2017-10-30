# :unlock: ssldec
Promise based SSL Encrypt/Decrypt using Private or Public Keys

## :key: Usage
```
let SSLdec = require('ssldec');
let crypt = new SSLdec();

crypt.setPrivateKey({
    path: '/path/to/cakey.pem'
});

crypt.encrypt('somedata').then(function(encrypted_string){ console.log(encrypted_string); 
	crypt.decrypt(encrypted_string).then(function(decrypted_buffer){ 
	        console.log(decrypted_buffer.toString('utf8') );
	});
});

```

#### Credit

Pure JS RSA by [node-rsa](https://www.npmjs.com/package/node-rsa), library based on [recrypt](https://github.com/morrelinko/recrypt)
