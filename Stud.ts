// create class student accept rollnumber,name,3 subject marks .
// calculate total marks  and percentage and display it

class Student1
{
    rollnumber:number;
    name:string;
    marathi:number;
    english:number;
    kannada:number;
    totalMarks:number;
    percentage:number;


   constructor(rollnumber,name,marathi,english,kannada)
   {

    this.rollnumber=rollnumber;
    this.name=name;
    this.marathi=marathi;
    this.english=english;
    this.kannada=kannada;

   }


   CalculateTotalMarks()
   {
    this.totalMarks=this.marathi+this.english+this.kannada;
   }

   CalculatePersentage()
   {
    this.percentage=(this.totalMarks/(3*100))*100;
   }


   print()
   {
       console.log(this.rollnumber);
       console.log(this.name);
       console.log(this.totalMarks);
       console.log(this.percentage);
   }

}

const std = new Student1 (1,"Omkar",60,50,80);
std.CalculateTotalMarks();
std.CalculatePersentage();
std.print();

