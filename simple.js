var expect = require("chai").expect;  
/*Expect is uses by chai*/

describe ('Simple test', function(){
	it('will pass only if everything gonna be alright', function(){
		expect(true).to.be.true;
	});
});
