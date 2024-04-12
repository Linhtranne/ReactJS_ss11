class Employees{
    public name: string;
    protected company: string;
    private phone: string;
    constructor (name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    public get printInfo(){
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
        return;
    }
}
class Manager extends Employees{
    private teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
}