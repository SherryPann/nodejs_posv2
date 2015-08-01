 var DateTime = require("./date");
 function Pos(cart, scanner) {
  this.cart = cart;
  this.scanner = scanner;
}

Pos.prototype.getReceiption = function() {
  var datetime = new DateTime();

  var receipt = '***<没钱赚商店>收据***\n' +
    '打印时间：' + datetime.getTime() +
    '\n----------------------\n' + this.getCartItemsString() +
    '----------------------\n' +
    '挥泪赠送商品：\n' + this.getPromotionitemsString() +
    '----------------------\n' +
    '总计：' + this.cart.getSumtotal() + '(元)\n' +
    '节省：' + this.cart.getSavedMoney() + '(元)\n' +
    '**********************';
  return receipt;
};

Pos.prototype.getCartItemsString = function() {
  var cartitemsString = '';

  this.cart.cartItems.forEach(function(cartItem) {
    cartitemsString +=
      '名称：' + cartItem.getName() +
      '，数量：' + cartItem.count + cartItem.getUnit() +
      '，单价：' + cartItem.getPrice().toFixed(2) + '(元)' +
      '，小计：' + cartItem.getSubtotal().toFixed(2) + '(元)\n';
  });

  return cartitemsString;
}

Pos.prototype.getPromotionitemsString = function() {
  var promotionItemsString = '';

  this.cart.cartItems.forEach(function(cartItem) {
    var promotioncount = cartItem.getPromotionCount();
    if (promotioncount > 0) {
      promotionItemsString +=
        '名称：' + cartItem.getName() +
        '，数量：' + promotioncount + cartItem.getUnit() + '\n';
    }
  });
  return promotionItemsString;
};

module.exports = Pos;
