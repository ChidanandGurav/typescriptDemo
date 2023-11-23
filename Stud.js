var Student1 = /** @class */ (function () {
    function Student1(rollnumber, name, marathi, english, kannada) {
        this.rollnumber = rollnumber;
        this.name = name;
        this.marathi = marathi;
        this.english = english;
        this.kannada = kannada;
    }
    Student1.prototype.CalculateTotalMarks = function () {
        this.totalMarks = this.marathi + this.english + this.kannada;
    };
    Student1.prototype.CalculatePersentage = function () {
        this.percentage = (this.totalMarks / (3 * 100)) * 100;
    };
    Student1.prototype.print = function () {
        console.log(this.rollnumber);
        console.log(this.name);
        console.log(this.totalMarks);
        console.log(this.percentage);
    };
    return Student1;
}());
var std = new Student1(1, "Omkar", 60, 50, 80);
std.CalculateTotalMarks();
std.CalculatePersentage();
std.print();
