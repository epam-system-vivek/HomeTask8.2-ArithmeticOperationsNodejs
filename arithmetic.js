// 1. Create a node.js command line program which reads operation(add, subtract, multiply, division) 
// and values as arguments and returns the appropriate output onto console as in below criteria
//  a.node app.js --operation addition 1 2 3 4 => 1+2+3+4 = 10
//  b. node app.js --operation multiply 1 2 3 4 => 1*2*3*4 = 24
//  c. node app.js --operation subtraction 2 1 => 2 - 1 = 1
//  d. node app.js --operation division 4 2 => 4/2 = 2
//  2.All the invalid cases need to be handled for all the operations
//  3. Include validations for unsupported operations, number of inputs etc.
//  Note: Please note that addition and multiplication takes "n” values for inputs.Subtraction and division takes 2 values for input.
const args = process.argv.slice(2);//array of command-line arguments passed,slice(2) removes the first two arguments.
if (args.length < 3) {
  console.log("Usage: node app.js --operation <addition|subtraction|multiplication|division> <values>");
  process.exit(1);
}//arg[0]=--operation word
//arg[1]= add or sub or mul or div
//arg[2]= values separated by space

const operation = args[1];
const values = args.slice(2).map(Number);

switch (operation) {
  case "addition":
    console.log(`${values.join("+")} = ${values.reduce((a, b) => a + b)}`);
    break;
  case "subtraction":
    if (values.length > 2) {
      console.log("enter only 2 values");
    }
    else {
      console.log(`${values.join("-")} = ${values[0] - values[1]}`);
    }
    break;
  case "multiplication":
    console.log(`${values.join("x")} = ${values.reduce((a, b) => a * b)}`);
    break;
  case "division":
    if (values.length > 2) {
      console.log("enter only 2 values");
    }
    else if (values[1] === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log(`${values.join("/")} = ${values[0] / values[1]}`);
    }
    break;
  default:
    console.log("Unsupported operation");
}


