var Employee = /** @class */ (function () {
    function Employee(Eid, name, Bsalary) {
        this.Eid = Eid;
        this.name = name;
        this.Bsalary = Bsalary;
    }
    Employee.prototype.calculate = function () {
        this.hra = this.Bsalary * 0.40;
        this.da = this.Bsalary * 0.20;
        this.ta = this.Bsalary * 0.10;
        this.pf = this.Bsalary * 0.12;
        this.gross = (this.Bsalary + this.hra + this.da + this.ta) - this.pf;
    };
    Employee.prototype.print = function () {
        console.log(this.gross);
    };
    return Employee;
}());
var a = new Employee(1, "Chidanand", 25000);
a.calculate();
a.print();
