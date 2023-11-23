interface IStudent
{
    rollno:Number;
    name:string;
}

class Student
{
    rollno:Number;
    name:string;

    constructor(rollno,name)
    {
        this.rollno = rollno;
        this.name = name;
    }
}

const s : IStudent = new  Student(1,"Chidanand");
console.log("Roll No :"+s.rollno + "  Name :"+s.name);