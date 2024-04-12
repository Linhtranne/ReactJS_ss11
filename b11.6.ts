class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getDescription() {
        console.log(`Name: ${this.name}, Price: $${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    public printInfo() {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
const electronics = new Electronics("Laptop", 1200, "Dell");
electronics.printInfo();