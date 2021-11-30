/* 
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

const camelCase = () => {
  return this.replace(/\b\w/gi, (c) => c.toUpperCase())
    .replace(/\s+/g, '')
    .trim();
};

console.log(camelCase('hello world 2'));
