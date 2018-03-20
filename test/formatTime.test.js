const format = require("../lib/formatTime");
test("3天前", function () {
    expect(format("3天前")).toBe("2018-3-17");
});
test("10小时前", function () {
    expect(format("10小时前")).toBe("2018-3-20");
});
test("18小时前", function () {
    expect(format("18小时前")).toBe("2018-3-19");
});
test("3月2日", function () {
    expect(format("3月2日")).toBe("2018-3-2");
});
test("2017年3月2日", function () {
    expect(format("2017年3月2日")).toBe("2017-3-2");
});