var CartItem = require("../../models/cart-item.js");

describe("cartitem",function(){
  describe("constructor",function(){
    it("should accept barcode and count as parameters",function(){
      var thecartitem = new CartItem('ITEM000001',5);
      expect(thecartitem.barcode).toBe('ITEM000001');
      expect(thecartitem.count).toBe(5);

    });
  });

describe("getItem",function(){
  it("should get the iteminfo",function(){
  var thecartitem = new CartItem('ITEM000003',2);
  var item = thecartitem.getItem();
  expect(item.name).toBe("荔枝");
  expect(item.unit).toBe("斤");
  expect(item.price).toBe(15.00);
  })
});

  describe("getName",function(){
    it("get the correct name",function(){
    var thecartitem = new CartItem('ITEM000001',5);
    var name = thecartitem.getName();
    expect(name).toBe('雪碧');
    });
  });

  describe("getUnit",function(){
    it("get the correct unit",function(){
    var thecartitem = new CartItem('ITEM000001',5);
    var unit = thecartitem.getUnit();
    expect(unit).toBe('瓶');
    });
  });

  describe("getPrice",function(){
    it("get the correct price",function(){
    var thecartitem = new CartItem('ITEM000001',5);
    var price = thecartitem.getPrice();
    expect(price).toBe(3);
    });
  });
  describe("getPromotionCount",function(){
    it("get the correct promotioncount",function(){
    var thecartitem = new CartItem('ITEM000001',5);
    var promotioncount = thecartitem.getPromotionCount();
    expect(promotioncount).toBe(1);
    });
  });

 });
