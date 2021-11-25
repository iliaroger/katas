const checkXO = (input) => {
  let o = [];
  let x = [];
  for (let i = 0; i < input.length; i++) {
    input[i].toLowerCase() === 'x'
      ? x.push(input[i])
      : input[i].toLowerCase() === 'o'
      ? o.push(input[i])
      : null;
  }
  return o.length === x.length;
};

console.log(checkXO('oxoooxxx'));
