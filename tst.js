let num=6
for (let i = num; i >=1; i--) {
    //let row = '';
    // for (let j = 1; j <= num - i; j++) {
    //     process.stdout.write(" ")
    // }
    // for (let k = 1; k <= 2 * i - 1; k++) {
    //    process.stdout.write("*")
    // }

    for (let j = 1; j <= num - i; j++) {
        process.stdout.write(" ")
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
       process.stdout.write("*")
    }

    console.log("")
    //console.log(row);
}
