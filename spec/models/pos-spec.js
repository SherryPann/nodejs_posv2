var Pos = require("../../models/pos.js");
var Cart = require('../../models/cart.js');
var Scanner = require('../../models/scanner.js');
var DateTime = require("../../models/date.js");
describe("pos",function(){
  describe("constructor",function(){
  it("get the Receiption",function(){
    var cart = new Cart();
    var scanner = new Scanner();
    var pos = new Pos(cart,scanner);
    expect(pos.scanner).toBe(scanner)
  });
  });

  describe("getPromotionitemsString",function(){
    it("get the  promotionItemsString",function(){
      var cartitems = {barcode: 'ITEM000005', count : 3};
      var cartitemf = {barcode: 'ITEM000001',count: 4};
      var cart = new Cart();
      cart.addCartItem(cartitemf);
      cart.addCartItem(cartitems);
      var scanner = new Scanner();
      var pos = new Pos(cart,scanner);
      var string = '名称：雪碧，数量：1瓶\n'+'名称：方便面，数量：1袋\n'
       ;
      var promotionItemsString = pos.getPromotionitemsString();
      expect(promotionItemsString).toBe(string);
    });
  })

  describe("getCartItemsString",function(){
    it("get the  itemstring",function(){
      var cartitems = {barcode: 'ITEM000005', count : 3};
      var cartitemf = {barcode: 'ITEM000001',count: 4};
      var cart = new Cart();
      cart.addCartItem(cartitemf);
      cart.addCartItem(cartitems);
      var scanner = new Scanner();
      var pos = new Pos(cart,scanner);
      var string =
      '名称：雪碧，数量：4瓶，单价：3.00(元)，小计：9.00(元)\n' +
      '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n';
      var itemstring = pos.getCartItemsString();
      expect(itemstring).toBe(string);
    });
  })

  describe("getReceiption",function(){
    it("get the  bill",function(){
      var cartitems = {barcode: 'ITEM000005', count : 3};
      var cartitemf = {barcode: 'ITEM000001',count: 4};
      var cart = new Cart();
      var datetime = new DateTime();
      var formattedDateString = datetime.getTime();
      cart.addCartItem(cartitemf);
      cart.addCartItem(cartitems);
      var scanner = new Scanner();
      var pos = new Pos(cart,scanner);
      var string =
      '***<没钱赚商店>收据***\n' +
      '打印时间：' + formattedDateString + '\n' +
      '----------------------\n' +
      '名称：雪碧，数量：4瓶，单价：3.00(元)，小计：9.00(元)\n' +
      '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
      '----------------------\n' +
      '挥泪赠送商品：\n' +
      '名称：雪碧，数量：1瓶\n' +
      '名称：方便面，数量：1袋\n' +
      '----------------------\n' +
      '总计：18.00(元)\n' +
      '节省：7.50(元)\n' +
      '**********************';;
      var bill = pos.getReceiption();
      expect(bill).toBe(string);
    });
  });
});
