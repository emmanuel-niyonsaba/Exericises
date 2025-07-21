

/// Here job is to create the function with 2 arrugment and it will let doctor know if the client is afraid 


const  amIAfraid = function(day, num) {
  switch (day) {
    case "Monday":
      return num === 12;
    case "Tuesday":
      return num > 95;
    case "Wednesday":
      return num === 34;
    case "Thursday":
      return num === 0;
    case "Friday":
      return num % 2 === 0;
    case "Saturday":
      return num === 56;
    case "Sunday":
      return num === 666 || num === -666;
    default:
      return false; 
  }
}
