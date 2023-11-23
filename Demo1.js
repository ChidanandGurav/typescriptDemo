// let message = "Hello";
// console.log(message);
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.print = function (value) {
        console.log(value.a + " " + value.b);
    };
    return Test;
}());
var IData = { a: 10, b: 30 };
var t1 = new Test();
t1.print(IData);
