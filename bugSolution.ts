function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if(isNaN(numB)){
        throw new Error("Invalid input: b must be a number or parseable string")
    }
    return a + numB;
  }
  return a + b;
}

let result = addSafe(1, '2'); //Correctly handles string input
console.log(result) //outputs 3
let result2 = add(1,2); //Correct usage
console.log(result2) //outputs 3
let result3 = addSafe(1, "hello"); //Throws an error as expected
console.log(result3)