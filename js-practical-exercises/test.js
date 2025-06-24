const words = ["Hello", "Hi", "Hey", "Hat", "Hen", "How"];
const newWords = words.filter((word, index, arr) => {
  words.push("New");
  return words.length > 10;
});

console.log(newWords)

// the logic behind

// this fileter will iterate through the add the world("new")
// So array words will start by 6 as it length
// then by adding world ("new") it will reach to 10 as length when is on the 3 index

// the return next index values as it's going to have the length > 10

// the final output it's  ["Hen","How"]

