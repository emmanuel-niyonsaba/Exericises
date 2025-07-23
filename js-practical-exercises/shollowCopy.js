

// const person ={
//     name: "Emmanuel",
//     school: "Tumba",
//     address:{
//         provence: "North",
//         city:"Musanze"
//     }
// }


// const personShollowCopy = structuredClone(person)
// personShollowCopy.address.city="Ngororero"
// console.log(personShollowCopy);
// console.log(person)


// let person2 ={
//     name:"thrhierry",
//     class: "class c",
//     address: {
//         city: "Kamambe",
//         steet: "Badive"
//     }

// }
// let sholow2 = Object.assign({},person2)

// sholow2.address.city="Bugarama"
// console.log(person2.address.city)

const products ={
   
    product1 :{
        name : "mango ",
        Price: 500
    },
    product2 :{
        name : "avocado ",
        Price: 60
    },
    product3 :{
        name : "painaple ",
        Price: 100
    },
    product4 :{
        name : "papaya ",
        Price: 8000
    }
    
}
let result=[]
for (let key in products){
const generalArr = Object.entries(products[key])
const singleArr = [generalArr.flat(Infinity)]

 result.push(singleArr.flat(Infinity))


}

console.log(result.flat(Infinity))

