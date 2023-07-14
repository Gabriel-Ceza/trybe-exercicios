let n = 5;
let ast = "*";
let inputAst = "";
let input = "";
let blank = " ";
let result = "";

// for (let index = 0; index < n; index += 1) {
//   ast += "*";
// }

// for (let i = 0; i < n; i += 1) {
//   console.log(ast);
// }

// console.log(ast);

// for (let index = 0; index < n; index += 1) {
//   ast += "*";
//   console.log(ast);
// }

for (let index = 0; index < 5; index += 1) {
  input = blank.repeat(n - 1);
  n -= 1;
  inputAst = ast.repeat(index + 1);
  result = input + inputAst;
  console.log(result);
}
