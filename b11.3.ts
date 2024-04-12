class Person{
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    displayInfo():void {
        console.log(this.name);;
        
    }
}
class Students extends Person{
    public Id:number;
    constructor(name: string, Id:number){
        super(name);
        this.Id = Id;
    }
    displayInfo(): void {
        console.log(this.name);
        console.log(this.Id);
    }
}
let Student1 = new Students("Linh",1);
Student1.displayInfo;
