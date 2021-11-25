const getLetters = (exampleString) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let stringArray = '';
  let parsedString = exampleString.replace(/[^A-Za-z]+/g, '');
  for (let i = 0; i < parsedString.length; i++) {
    stringArray += `${alphabet.indexOf(parsedString[i].toLowerCase()) + 1} `;
  }
  return stringArray;
};

console.log(getLetters("3 _ _ 3 The sunset sets at twelve o' clock."));
