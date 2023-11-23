var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }
    return Student;
}());
var s = new Student(1, "Chidanand");
console.log("Roll No :" + s.rollno + "  Name :" + s.name);
