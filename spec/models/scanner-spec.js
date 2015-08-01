var Scanner = require("../../models/scanner.js");
describe("Scanner",function(){
  it("should return the barcode and count",function(){
    var scanner = new Scanner();
    var result = scanner.scan('ITEM000003');
    expect(result.barcode).toBe('ITEM000003');
    expect(''+result.count).toEqual('1');
  });
});
