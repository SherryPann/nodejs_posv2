var Cart = require("./cart.js");
var Scanner = require("./scanner.js");
var Pos = require("./pos.js")

function printReceipt(inputs) {
  var cart = new Cart();
  var scanner = new Scanner();
  var pos = new Pos(cart,scanner);

  inputs.forEach(function(input){
  var cartitem =  scanner.scan(input);
    cart.addCartItem(cartitem);
  });

  var receiption = pos.getReceiption();
  console.log(receiption);

}
