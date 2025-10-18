const longFormatData = [
{ id: 1, name: "Alice", age: 30 },
{ id: 2, name: "Bob", age: 25 },
{ id: 3, name: "Charlie", age: 35 }
];
const keys = ["id", "name","age"];
// // const wideFormatData = pivotLongToWide(longFormatData, keys);
// // console.log(wideFormatData);
// output: {
//     id: [ 1, 2, 3 ],
//     name: [ 'Alice', 'Bob', 'Charlie' ]
// }





function wideFormatData(a, b) {
  const result = {};

  for (const k of b) {

    result[k] = data.map(item => item[k]);
  }

  return result;
}


console.log(wideFormatData(longFormatData,keys));
