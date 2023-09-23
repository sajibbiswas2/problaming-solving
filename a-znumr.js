//1/100 ja kno number bar korar programnig

  
function getRandamNUmbr(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandamNUmbr (1,100))