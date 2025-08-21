

let Animal={
    eat: ()=>{
        console.log(`It is now eating`)
    }

}
const dog = Object.create(Animal)
console.log(dog.prototype)