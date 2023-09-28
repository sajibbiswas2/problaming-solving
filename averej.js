//1-n porjonto to avereg number calculet


function number(n) {
    let count = 0, sum = 0;
    for (let i = 0; i <= n; i++){
        if (i % 3 == 0) {
            count = count + 1;
            sum = sum + i;
        
        }
    }

    const avg = sum / count;
    return avg;
}

const totalresult = number(50)
console.log(totalresult);