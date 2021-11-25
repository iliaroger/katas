const findN = (integers) => {
  return (array = integers.filter((a) => a % 2 === 0)).length !== 1
    ? integers.find((a) => a % 2 !== 0)
    : integers.find((a) => a % 2 === 0);
};

console.log(findN([2, 4, 6, 8, 3]));
