
function number() {
    let count =0
    for(let i= 1; i <= 20; i++) {
        if (i % 3 == 0) {
          count =count+1
            
         }
    }
    return count;
}
const result = number();
console.log(result);