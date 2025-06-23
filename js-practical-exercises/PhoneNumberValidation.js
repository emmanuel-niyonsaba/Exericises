function phoneNumberValidation(phone) {
  const regex = /^(\d{3}[- ]?\d{3}[- ]?\d{4})$/;
  return regex.test(phone);
}
console.log(phoneNumberValidation("1234567890"));    
console.log(phoneNumberValidation("123-456-7890"));   
console.log(phoneNumberValidation("123 456 7890"));   
console.log(phoneNumberValidation("123-45-67890"));   
console.log(phoneNumberValidation("1234-567890"));    
console.log(phoneNumberValidation("123 4567 890"));   
console.log(phoneNumberValidation("12 34c56 7890"));   


