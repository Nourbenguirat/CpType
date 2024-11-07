interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Honda", "Civic", 2022);
  myCar.start(); // This should log: "Car engine started"
  