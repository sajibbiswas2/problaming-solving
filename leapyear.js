function toLeapyear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false
    }
    
}

var yearChak = 2028;

if (toLeapyear(yearChak)) {
    console.log(yearChak + "this is a leap year");
}
else {
    console.log( yearChak +"this is a not leap year")
}