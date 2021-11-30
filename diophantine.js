/* 
In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.

In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

x2 - 4 * y2 = n
(where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

Examples:
solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
solEquaStr(90002) --> "[]"
Hint:
x2 - 4 * y2 = (x - 2*y) * (x + 2*y)

(x)*(x+2y) = 90005 + 2y
x*x  = 90005 + 4y
*/

//brute force way. mathimatical way unknown

const equationFunction = (number) => {
  let results = [];
  for (let x = 0; x <= number; x++) {
    for (let y = 0; y <= number; y++) {
      if (number === (x - 2 * y) * (x + 2 * y)) {
        results.push([x, y]);
      }
    }
  }
  return results.reverse();
};

console.log(equationFunction(36));
