const convertNumerals = (input) => {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = [];
  for (let i = 0; i < input.length; i++) {
    for (let [key, value] of Object.entries(numerals)) {
      sum.push(input[i] === key ? value : 0);
    }
  }

  let newSum = sum
    .filter((a) => a !== 0)
    .reduce((a, b) => (a / b > 1 / 10 ? a - b : a + b));
  console.log(newSum);
};

console.log(convertNumerals('IX'));
