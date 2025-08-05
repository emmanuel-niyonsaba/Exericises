// Composition

// Definition: Use of other classes to build functionality.

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor() {
    // here the engine propeties use the Engine class 
    this.engine = new Engine();
  }

  startCar() {
    this.engine.start();
  }
}

const car = new Car();
car.startCar();
// this means those above class are working together just for better functionalities