const countTotalSalary = function (employees) {
  const keys = Object.values(employees);
  let result = 0;
  for (const key of keys) {
    result += key;
  }
  return result;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
