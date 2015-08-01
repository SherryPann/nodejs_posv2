var Cart = require("../../models/cart.js");
describe("cart", function() {
  describe("constructor", function() {
    it('accept cartItems as parameters', function() {
      var cartItems = [{
        barcode: 'ITEM000001',
        count: 5
      }, {
        barcode: 'ITEM000003',
        count: 2
      }];
      var cart = new Cart(cartItems);
      expect(cart.cartItems[0].barcode).toBe('ITEM000001');
      expect(cart.cartItems[0].count).toBe(5);
      expect(cart.cartItems[1].barcode).toBe('ITEM000003');
      expect(cart.cartItems[1].count).toBe(2);
    });
  });

  describe("addCartItem",function(){
    it('add cartitem to cartItems',function(){
      var cart = new Cart([]);
      var cartitem = {barcode: 'ITEM000005', count : 3};
      cart.addCartItem(cartitem);
      expect(cart.cartItems[0].barcode).toBe('ITEM000005');
      expect(cart.cartItems[0].count).toBe(3);


    });
  });

  describe("findCartItem", function() {
    it('find cartitem', function() {
      var cartItems = [{
        barcode: 'ITEM000001',
        count: 5
      }, {
        barcode: 'ITEM000003',
        count: 2
      }];
      var cartitem = {barcode: 'ITEM000003', count : 1};
      var cart = new Cart(cartItems);
      cart.findCartItem(cartitem.barcode);
      expect(cart.cartItems[1].barcode).toBe('ITEM000003');
      expect(cart.cartItems[1].count).toBe(2);

    });
  });

  describe("getSumtotal",function(){
    it("calculate the sumtotal",function(){
      var cartItem = require('../../models/cart-item.js');
      var cartitemf = {barcode: 'ITEM000005', count : 3};
      var cartitems = {barcode: 'ITEM000001',count: 4};
      var cart = new Cart();
      cart.addCartItem(cartitemf);
      cart.addCartItem(cartitems);
      var sumtotal = cart.getSumtotal();
      expect(sumtotal).toBe('18.00')
    });
  });

  describe("getSavedMoney",function(){
    it("calculate the savedmoney",function(){
      var cartItem = require('../../models/cart-item.js');
      var cartitemf = {barcode: 'ITEM000005', count : 3};
      var cartitems = {barcode: 'ITEM000001',count: 4};
      var cart = new Cart();
      cart.addCartItem(cartitemf);
      cart.addCartItem(cartitems);
      var savedmoney = cart.getSavedMoney();
      expect(savedmoney).toBe('7.50')
    })
  });
});
