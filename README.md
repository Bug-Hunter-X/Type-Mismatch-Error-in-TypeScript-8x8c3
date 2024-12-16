# TypeScript Type Mismatch Bug

This repository demonstrates a common type error in TypeScript where a function is called with arguments of incorrect types.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` shows a corrected version.

## Bug Description:

The `add` function is defined to accept two numbers and return their sum. However, in the code, a string ('2') is passed as the second argument, leading to a type mismatch error during compilation.

## Solution:

The solution involves ensuring that the arguments passed to the `add` function are indeed numbers.  This can be achieved by explicit type checking or by modifying the code to handle different input types appropriately.  See `bugSolution.ts` for an example of how to handle this error by adding type guards.