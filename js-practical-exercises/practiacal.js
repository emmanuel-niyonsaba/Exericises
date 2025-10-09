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





function wideFormatData(data, keys) {
  const result = {};

  for (const key of keys) {

    result[key] = data.map(item => item[key]);
  }

  return result;
}


console.log(wideFormatData(longFormatData,keys));
