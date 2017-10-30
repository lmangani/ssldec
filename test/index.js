'use strict';

let ReCrypt = require('../lib/index.js');
let crypt = new ReCrypt();

crypt.setPrivateKey({
    path: '/home/lorenzo/Documents/opensips_cakey.pem'
});


var assert = require('assert');
describe('recrypt', function() {
  describe('decrypt', function() {
    it('should return string "somedata"', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
      crypt.encrypt('somedata').then(function(line){ console.log(line); 
	crypt.decrypt(line).then(function(xline){ 
	        assert.equal(line, xline.toString('utf8') );
	});
      });
    });
  });
});

