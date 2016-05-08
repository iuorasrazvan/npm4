var ircnpm1=require ('ircnpm1');
var msg="This is a message from the package ircnpm2 "; 
var output=ircnpm1.printMsg(); 


exports.printMsg = function() {
  
  console.log(msg); 
}
