class Rectangle extends Shape {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  
    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  class Circle extends Shape {
    private radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    calculatePerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  const rectangle = new Rectangle(3, 4);
  const circle = new Circle(10);
  
  console.log(`S hình chữ nhật: ${rectangle.calculateArea()}`);
  console.log(`S hình tròn: ${circle.calculateArea()}`);
  
  console.log(`P hình chữ nhật: ${rectangle.calculatePerimeter()}`);
  console.log(`P hình tròn: ${circle.calculatePerimeter()}`);
      