# chai-on-mocha
A simple Chai-On-Mocha basic tutorial for dummies

For this you must be aware of Simple Node.JS javascript server and a basic knowledge of NPM a node module used to compile the code


Now at first we clone this repo inside the pc

$git clone https://github.com/jubs16/chai-on-mocha.git

$cd chai-on-mocha

initalise the node server this will guide you through creating package.json file.

$npm init

entry point - simple.js
test command - mocha
Lisence - MIT
save changes - yes

Now install node packages Mocha and chai for unit testing.

$npm install mocha chai --save

quick note: -g to save package globally and -s to mark dependencies inside package.json file automatically.

Open simple.js file and comment the first line in simple.js file like shown below-

//var expect = require("chai").expect;  
/*Expect is used by chai*/

describe ('Simple test', function(){
	it('will pass only if everything gonna be alright', function(){
		expect(true).to.be.true;
	});
})


run

$mocha simple

you will get the following output inside your terminal screen-

  Simple test
    1) will pass only if everything gonna be alright


  0 passing (22ms)
  1 failing

   1) Simple test
       will pass only if everything gonna be alright:
     ReferenceError: expect is not defined
      at Context.<anonymous> (simple.js:7:3)
  
  
  It throws an exception "expect is not defined" since expect is not recognized by mocha and is a chai statement.
  
  Now in the test two we uncomment the first line in simple.js
  
  save and run 
  
  $mocha simple
  
  you should get the following screen showing the output
  
    Simple test
    √ will pass only if everything gonna be alright


  1 passing (36ms)
  
  You can see mocha has passed through second test or function this example shows that expect is a chai property and only works when implemented with chai.
  
  This was a very basic tutor with me Chai-On-Mocha who usually land here without any prerequisite knowledge on mocha and chai.
  
  I hope you enjoyed. Don't forget to suscribe. Have a nice day!!!
