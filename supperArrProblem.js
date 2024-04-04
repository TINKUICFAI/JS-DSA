let arr = [
  { language: "JavaScript" },
  { language: "TypeScript" },
  { language: "JavaScript" },
  { language: "C++" },
];

// [
//     { language: 'JavaScript', count: 2 },
//     { language: 'C++', count: 1 },
//     { language: 'TypeScript', count: 1 }
//     ]

let newArr = arr.reduce((acc, cur) => {
  let found = acc.find((item) => item.language === cur.language);

  console.log(found);
  if (found) {
    found.count++;
  } else {
    acc.push({ language: cur.language, count: 1 });
  }

  return acc;
}, []);

console.log(newArr);
