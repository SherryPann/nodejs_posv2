
function Scanner() {}
Scanner.prototype.scan = function(input) {
  var barcode = input.split('-')[0];
  var count = input.split('-')[1] || 1;
  var cartitem = {};
  cartitem.barcode = barcode;
  cartitem.count = count;
  return cartitem;
}
module.exports = Scanner;
