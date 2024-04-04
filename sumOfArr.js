let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, "o"];

let total = arr.reduce((acc, val) => {
  if (typeof val === "number") {
    return acc + val;
  } else {
    return acc;
  }
}, 0);

console.log("Total=>>>", total);
