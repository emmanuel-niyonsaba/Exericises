

class Car {
    constructor(name,bland,year){
        this._name =name
        this._bland= bland
        this._year = year

    }
    
   get cardetails (){
    if (!typeof (this._year) === Number){
        return `year should be a Number`
    }
         return `this car name is ${this._name} bland is ${this._bland} and the year of made is ${this._year}`
    }
   
}
const  car1 = new Car("Audi1222","Audi","123")
 console.log(car1.cardetails)