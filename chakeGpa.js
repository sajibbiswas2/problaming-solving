function chackGpa(arr) {
    for (let i = 0; i<arr.length;i++){
        if (arr[i] >= 80) {
            return true;
        }
    }
    return false;
    
}


   console.log(chackGpa([70, 58, 23]));