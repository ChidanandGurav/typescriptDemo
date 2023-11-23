var Product = /** @class */ (function () {
    function Product(pid, pname, price) {
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }
    Product.prototype.Discount = function () {
        this.discount = this.price - this.price * 0.10;
    };
    Product.prototype.print = function () {
        console.log(this.pid);
        console.log(this.pname);
        console.log(this.price);
        console.log(this.discount);
    };
    return Product;
}());
var prd = new Product(1, "Pen", 300);
prd.Discount();
prd.print();
