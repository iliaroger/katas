/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

const paranthesesCheck = (input) => {
  let opened = 0;
  if (input === '') return true;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ')') {
      if (opened === 0) {
        return false;
      }
      opened--;
    } else opened++;
    console.log(opened);
  }
  if (opened > 0) return false;
  else return true;
};

console.log(paranthesesCheck(''));
