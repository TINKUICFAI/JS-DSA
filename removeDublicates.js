let duplicateArr = [1, 1, 3, 4, 2, 3, 4, 5, 6, 5, 6, "pp", "pp"];

// duplicateArr = duplicateArr.filter((val, index, self) => {
//   return self.indexOf(val) === index;
// });

// duplicateArr = duplicateArr.reduce((acc, value) => {
//   if (!acc.includes(value)) {
//     acc.push(value);
//   }

//   return acc;
// }, []);

// console.log(duplicateArr);

// const rmvDup = (arr)=>arr.filter((val,index)=>arr.indexOf(val)===index)
const rmvDup = (arr) =>
  arr.reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }

    return acc;
  }, []);

console.log(rmvDup([1, 1, 2, 4, 3, 2, 4, 3, 4, 6, 7, 7]));
