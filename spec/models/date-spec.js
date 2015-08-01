var DateTime = require("../../models/date.js");
describe("time", function() {
it("get the currenttime", function() {
  var datetime = new DateTime();
  var string = datetime.getTime();
  dateDigitToString = function(num) {
    return num < 10 ? '0' + num : num;
  };

  var currentDate = new Date(),
    year = dateDigitToString(currentDate.getFullYear()),
    month = dateDigitToString(currentDate.getMonth() + 1),
    date = dateDigitToString(currentDate.getDate()),
    hour = dateDigitToString(currentDate.getHours()),
    minute = dateDigitToString(currentDate.getMinutes()),
    second = dateDigitToString(currentDate.getSeconds()),
    formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

  expect(string).toBe(formattedDateString);
});
});
