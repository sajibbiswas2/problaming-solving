function primenumber(number) {
    for (let i = 2; i < number.length; i++) {
        if (number % 2 == 0) {
            return false;
        }
    }
    return true;
}

console.log(primenumber(19));