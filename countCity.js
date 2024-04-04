const users = [
  { userName: "Alice", city: "New York" },
  { userName: "Bob", city: "Los Angeles" },
  { userName: "Charlie", city: "Chicago" },
  { userName: "David", city: "New York" },
  { userName: "Eve", city: "Los Angeles" },
  { userName: "Frank", city: "Chicago" },
];

function countUsersByCity(users) {
  const cityCounts = {};

  for (const user of users) {
    const city = user.city;
    if (!cityCounts[city]) {
      cityCounts[city] = 0;
    }
    cityCounts[city]++;
  }

  return cityCounts;
}

const cityCounts = countUsersByCity(users);

console.log(cityCounts); // Prints: { New York: 2, Los Angeles: 2, Chicago: 2 }
