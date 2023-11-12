console.log("\n");
console.log("Задача 4 Загальний баланс");

// 1) Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// 
// 2) Функція має використовувати ланцюжок виклику методів 
// та повертати загальний баланс користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.

const getTotalBalanceByGender = (users, gender) => {
  const totalBalance = users
    .filter(user => user.gender === gender) // перше кільце ланцюжка - шукаємо свій гендер
    .reduce((sum, user) => sum + user.balance, 0); // друге кільце ланцюжка - усі знайдені проводимо через підрахунок загальної суми за допомогою .reduce(). де початкове значення 0

  return totalBalance;
};

const allUsers1 = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers1, "male")); // 12053
console.log(getTotalBalanceByGender(allUsers1, "female")); // 8863
