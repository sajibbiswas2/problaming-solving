// let count = 0;
// let row, col;
// for (row = 1; row <= 5; row++) {
//   for (col = 1; col <= 3; col++)
//     console.log(`${row},${col}`);
//   }
// }

// let  count =0
// let row ,col;

// for (row = 1; row <= 10; row++){
//   for (col = 1; col <= 3; col++){
//     console.log(`${row},${col}`);
//   }
// }


// const count = 2;
// let row, col;

// for (row = 2; row <= 20; row++){
//   for (col = 1; col <= 5; col++){
//     console.log(`${row} ${col}`)
//   }
// }

// const rows = 5;

// // Loop for printing the rows
// for (let i = 0; i < rows; i++) {
//   // Loop for printing leading whitespaces
//   for (let j = 0; j < 2 * (rows - i) - 1; j++) {
//     process.stdout.write(" ");
//   }

//   // Loop for printing * character
//   for (let k = 0; k <= i; k++) {
//     process.stdout.write("* ");
//   }

//   process.stdout.write("\n");
// }

 function names() 
{ 
    let rows = 5; 
  
    // first loop for printing rows 
    for (let i = 0; i < rows; i++) { 
  
        // second loop for printing character in each rows 
        for (let j = 0; j <= i; j++) { 
            console.log("j "); 
        } 
       console.log("\r"); 
    } 
    return 0; 
}
names() 