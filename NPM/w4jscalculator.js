var readline = require('readline-sync');

var Calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = this.op;

    if (op === "add") {
      var result = x + y;
    } 
    
    else if (op === "sub") {
      var result = x - y;
    } 
    
    else if (op === "div") {
      var result = x / y;
    } 
    
    
    else if (op === "mult") {
      var result = x * y;

    } else {
      var result = "Error!"
    }

    console.log("Result: " + result);
  };
}

var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");
var op = readline.question("Please enter an operator: add/sub/mult/div");

var calc = new Calculation(num1, num2, op);

calc.result();