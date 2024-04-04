// let newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 2000);
// });

// function cns() {
//   console.log("world");
// }
// newPromise.then((res) => {
//   console.log(res);
//   cns();
// });

// (function sum() {
//   return function () {
//     return console.log(1 + 2);
//   };
// })();

// console.log(sum(1)(2));

const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1);
});


