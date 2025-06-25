

const validateIp = (address) => {
  const regEx = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
  const checkIp = regEx.test(address);
  return checkIp ? "Ip confirmed" : "Invalid Ip address";
};

console.log(validateIp("129.123.3.0")); // Ip confirmed
console.log(validateIp("999.123.3.0")); // Invalid Ip address
