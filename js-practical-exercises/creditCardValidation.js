
//this code will check and validate a credit card number format
const ValidateCard=(cardNumber)=>{
  // this regex will check for the format of 4 sets of 4 digits separated by hyphens
    const regEx= /^(\d{4}-){3}\d{4}$/;
    // let a = /^(\d{4}-){3}\d{4}/;
    const checCard = regEx.test(cardNumber);
  return  checCard
}
console.log(ValidateCard("1234-6666-3424-4324"));