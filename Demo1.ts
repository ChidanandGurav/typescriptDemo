// let message = "Hello";
// console.log(message);

// var emp={id:1, name:"Amol"};
// console.log(emp.name);


// class Date0
// {
//   day:Number;
//   month:String;
//   year:Number;
//   constructor(day,month,year)
//   {
//     this.day=day;
//     this.month=month;
//     this.year=year;
//   }
//  Print()
//  {
//     console.log(this.day+"/"+this.month+"/"+this.year);
//  }
// }

// const d0 =new Date0(23,"Nov",2023);
// d0.Print();


interface IData
{
  a:Number;
  b:Number;
}

class Test
{
  print(value:IData)
  {
    console.log(value.a+" "+value.b);
  }
}

const IData = {a:10 , b:30}

const t1 = new Test();
t1.print(IData);