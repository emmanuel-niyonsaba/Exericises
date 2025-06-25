

const ValidateCard=(cardNumber)=>{
    const regEx= /^(\d{4}-){3}\d{4}$/;
    // let a = /^(\d{4}-){3}\d{4}/;
    const checCard = regEx.test(cardNumber);
  return  checCard
}
console.log(ValidateCard("1234-6666-3424-4324"));