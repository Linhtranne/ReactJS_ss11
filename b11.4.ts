class Vehicles{
    protected name: string;
    protected speed: number;
    protected Id: number;
    constructor(name: string, speed: number, Id: number){
        this.name = name;
        this.speed = speed;
        this.Id = Id;
    }
    public slowDown() {
        this.speed -=10 ;
        console.log(`${this.name} giảm xuống còn ${this.speed} km/h.`);
    }

    public speedUp() {
        this.speed +=10 ;
        console.log(`${this.name} tăng lên ${this.speed} km/h.`);
    }
    public showSpeed(){
        console.log(this.speed);
        
    }
}
let hehehe = new Vehicles("hehehe", 1000 , 2);
hehehe.showSpeed();
hehehe.slowDown();
hehehe.speedUp();