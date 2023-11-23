
// create employee class accept id .name, basic salary in constructor ,calculate gross salary (hra,ta,da,pf) 
// calculate all allowance write method in typescript

class Employee{
    Eid : number;
    name: string;
    Bsalary: number;
    hra:number;
    ta:number;
    da:number;
    pf:number;
    gross : number;

    constructor(Eid,name,Bsalary){
        this.Eid=Eid;
        this.name=name;
        this.Bsalary=Bsalary;
        
    }
    calculate(){
        this.hra=this.Bsalary*0.40;
        this.da=this.Bsalary*0.20;
        this.ta=this.Bsalary*0.10;
        this.pf=this.Bsalary*0.12;
        
        this.gross = (this.Bsalary+this.hra+this.da+this.ta)-this.pf;
    }
    print(){
         console.log(this.gross);
    }
}
const a = new Employee(1,"Chidanand",25000);
a.calculate();
a.print();