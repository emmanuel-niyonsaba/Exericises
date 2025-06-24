

// this is how we create the regural expressions



// test method
const testString ="May name is emmanuel student in It year  1 class A Emmanuel"
const regEx = /emmanuel/ig
const testResult=regEx.test(testString)

console.log(testResult)
//match method
const matchResult = testString.match(regEx)
console.log(matchResult)


//About to find the any world in string stated or ended with some characters

const regEx2 = /emm/ig
const charStart = testString.match(regEx2)
console.log(charStart)

// About checking fo the range both numbers and letters

const regEx3 = / [a-z]/ig
const rangeMatchs =testString.match(regEx3);
console.log(rangeMatchs)


// this is for select maching charactors that accur one or more times in string


const difficlutSpelling = "mississippsi"
const regEx4 = /s+/g
const difficlutSpellingresult = difficlutSpelling.match(regEx4)
console.log(difficlutSpellingresult);

// maching the charactor accur zero or more times

const cheweiQuote ="Gooooooooooool"
const cheweiQuoteRegEx= /go*/i
const cheweiQuoteResult = cheweiQuote.match(cheweiQuoteRegEx)
console.log(cheweiQuoteResult)

// this if finding charactor with greedy mutching 

const greedyMutchString= "titanic"
const greedyMutchRegEx= /t[a-z]*i/i
const greedyMutchResult = greedyMutchString.match(greedyMutchRegEx)
console.log(greedyMutchResult);
console.log("greedy is done now ");
// this if finding charactor with lazy mutching (we only add the ? after greedy much)

const lezy= "titanic"
const lazyMutchRegEx= /t[a-z]*?i/
const lazyMutchResult = greedyMutchString.match(greedyMutchRegEx)
console.log(lazyMutchResult);

// this is for checking if string starts with the given string

const ricAndCal= "Cal and Rice are both racing"
const racingRegEx = /^Cal/
const ricAndCalResult = racingRegEx.test(ricAndCal)
console.log(ricAndCalResult);


// this is for checking if string ends with the given string


const racingRegEx2 = /racing$/
const ricAndCalResult2 = racingRegEx2.test(ricAndCal)
console.log(ricAndCalResult2);

//this is for mutching everthing but latters and numbers
const simpleCoat= "Time will come when eeverybody will write me everywhere"
const alphebeticRegEx = /\w/g;
const simpleCoatResult = simpleCoat.match(alphebeticRegEx).length;
console.log(simpleCoatResult)

// match for all numbers  we use \d
// \s is used to find all spaces in the string




// here is the rogics to validate the usename 
// requirement : 1. if is there any numbers they must be at the end of string
//                 2. the letter must be lowerCase or upperCase
//                     3. At leat two character is allowed here

const usename= "emmanuelNiyonsaba"
const checkUserNameRegEx = /^[A-Za-z]{2,}\d*$/
const checkUserNameResult = checkUserNameRegEx.test(usename)
console.log(checkUserNameResult);

// this is for how to replace the set of character is string with another one

const hugText = "Hello , My name is Ndihokubwayo"
const fixRegEx= /Ndihokubwayo/
const replaceText ="Emmanuel"
const replaceTextResult= hugText.replace(fixRegEx,replaceText)
console.log(replaceTextResult);

