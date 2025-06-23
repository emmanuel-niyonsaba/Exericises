

// This id explaing how to use bind

// note: normal bind method used when you want to use .this form given object

const person ={
    name: "Emmyson",
    school: "RP-Tumba",
    greet : function(){
        return `Hell may name is ${this.name}`
    }
}
const boundgreet = person.greet.bind(person)
console.log(boundgreet())