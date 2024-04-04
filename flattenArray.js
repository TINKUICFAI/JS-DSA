let arrayData = [
  2,
  3,
  "p2",
  4,
  5,
  3,
  [1, 2],
  [1, [(333, 44, [555])]],
  3,
  444,
  2,
  3,
];

// function flattenArray(array) {
//   let newArr = [];
//   let arrLength = array.length;
//   for (let i = 0; i < arrLength; i++) {
//     if (Array.isArray(array[i])) {
//       newArr.push(...flattenArray(array[i]));
//     } else {
//       newArr.push(array[i]);
//     }
//   }

//   return newArr;
// }

// console.log(flattenArray(arrayData));

function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

const flatArr = (arr) =>
  arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return [...acc, ...flatArr(val)];
    } else {
      return [...acc, val];
    }
  }, []);

let arr = [1, 3, [, 24, 5, 6, 7], 3, [, 5, 7, 8, 4]];
console.log(flatArr(arr));
console.log(flattenArray(arrayData));
