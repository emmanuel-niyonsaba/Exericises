

// this function is to validating phone number
// and it will return true when it phoneNumber is valid else false
const validatePhone=(p)=>{
    const regeEx =/^\d{3} \d{3}-\d{4}/
    return regeEx.test(p)


}