// create product class accept code,name,price in constructor
// give 10% discount on price then Display

class Product
{
    pid:Number;
    pname:string;
    price:any;
    discount:any;

    constructor(pid,pname,price)
    {
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }

    Discount()
    {
        this.discount= this.price-this.price*0.10;
    }

    print()
    {
        console.log(this.pid);
        console.log(this.pname);
        console.log(this.price);
        console.log(this.discount);
    }
}

const prd = new Product(1,"Pen",300);
prd.Discount();
prd.print();