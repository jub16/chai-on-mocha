
/*Expect is uses by chai*/
var expect = require("chai").expect;

describe ('A basic test', function(){
	it('shouls pass when everthing is okay', function(){
		expect(true).to.be.true;
	});
});