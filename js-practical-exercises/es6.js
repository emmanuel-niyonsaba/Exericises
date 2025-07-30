
// //Destructuring values from an object
// const gemstone = {
//   type: 'quartz',
//   color: 'rose',
//   carat: 21.29
// };
// const {type, color, carat} = gemstone;

// console.log(type, color, carat);

// /// Destructuring values from an array
// const point = [10, 25, -34];

// const [x, y, z] = point;

// console.log(x, y, z);



    //Object literal shorthand

    // const name2 ="emmy"
    // const school = "Tumba"
    // const classroom = "IT Class A"
    // const  stundentOjb ={name2,school,classroom}
    // console.log(stundentOjb)

//     function sum(...nums) {
//  console.log(nums)
//   }

// console.log(sum([1,2,3,4,5,56,6,5534]))
//  class Car {
//     constructor(name1,name2){
//         this.name =name1
//         this.secondeName = name2
//     }
//  }
//  let car1 = new Car("bugatata","labogine")
//  console.log(car1)


// class Person {
//   constructor(name, age) { // This runs when we create a new Person
//     this.name = name;
//     this.age = age;
//   }

//   // A method (function) inside the class
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }

// const p1 = new Person("John", 25);
// p1.greet(); // Output: Hello, my name is John.




// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);  // Calls Animal's constructor
//     this.breed = breed;
//   }
// }

// const dog = new Dog("Buddy", "Golden Retriever");
// console.log(dog.name);  // Buddy
// console.log(dog.breed); // Golden Retriever





// class Animal {
//   speak() {
//     console.log("Animal makes a sound.");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak(); // Call the parent class method
//     console.log("Dog barks.");
//   }
// }

// const dog = new Dog();
// dog.speak();
// // Output:
// // Animal makes a sound.
// // Dog barks.

// const sym1 = Symbol("emmy")


// console.log(sym


//  const uniqueFlavors = new WeakSet()
//  const flavors1 ={flavor:'chocolate' }
//  const flavors2 ={flavor:'papaya' }
// uniqueFlavors.add(flavors1,flavors2)
// console.log(uniqueFlavors)


// new Promise(function (resolve, reject) {
//     window.setTimeout(function createSundae(flavor = 'chocolate') {
//         const sundae = {};
//         // request ice cream
//         // get cone
//         // warm up ice cream scoop
//         // scoop generous portion into cone!
//         if ( / *iceCreamConeIsEmpty(flavor)* / ) {
//             reject(`Sorry, we're out of that flavor :-(`);
//         }
//         resolve(sundae);
//     }, Math.random() * 2000);
// });

// const myPromiseObj =newPromise(function (resolve, reject) {
// // sundae creation code
// });

// function* getEmployee() {
//     console.log('the function has started');

//     const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

//     for (const name of names) {
//         yield name;
//     }

//     console.log('the function has ended');
// }
// getEmployee()