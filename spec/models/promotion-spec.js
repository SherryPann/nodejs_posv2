var Promotion = require("../../models/promotion.js")
describe("Promotion",function(){
  it("should accept type and barcodes as parameters",function(){
  var promotion = new Promotion('BUY_TWO_GET_ONE_FREE', ['ITEM000000','ITEM000001','ITEM000005']);
  expect(promotion.type).toBe('BUY_TWO_GET_ONE_FREE');
  expect(promotion.barcodes[0]).toBe('ITEM000000');
  expect(promotion.barcodes[1]).toBe('ITEM000001');
  expect(promotion.barcodes[2]).toBe('ITEM000005');
});
});
