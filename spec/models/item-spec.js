var Item = require("../../models/item.js")
describe("item",function(){
  it("should accept barcode,name,unit,price as parameters",function(){
  var item = new Item('ITEM000005','方便面', '袋', 4.50);
  expect(item.barcode).toBe('ITEM000005');
  expect(item.name).toBe('方便面');
  expect(item.unit).toBe( '袋');
  expect(item.price).toBe( 4.50);
});
});
