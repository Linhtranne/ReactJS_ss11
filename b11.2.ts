class Employees1{
    public name: string;
    protected company: string;
    private phone: string;
    constructor (name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
     printInfo():void{
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
    getPhone():string {
        return this.phone;
    }
}
class Manager2 extends Employees1{
    private teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
    printInfo():void{
    console.log(this.name);
    console.log(this.company);
    console.log(this.getPhone());
    console.log(this.teamSize);
    
  }
}
let manager = new Manager2("linh", "linh", "linh", 100)
manager.printInfo;
