function reversData(str) {
    let revrs = '';
    for (let i = str.length - 1; i >= 0; i--){

        revrs += str[i];

    }

    return revrs;
}

const reversAllData = reversData('hello')
console.log(reversAllData);