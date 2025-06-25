

const person ={
    name: "Emmanuel",
    school: "Tumba",
    address:{
        provence: "North",
        city:"Musanze"
    }
}


const personShollowCopy = structuredClone(person)
personShollowCopy.address.city="Ngororero"
console.log(personShollowCopy);
console.log(person)