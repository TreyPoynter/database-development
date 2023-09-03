function digitize(n) {
    if (n == 0)
        return [0];
    const arr = [];
    
    do {
        arr.push(n % 10)
        n = Math.floor(n /= 10);
    } while(n > 0);
     
    return arr;
}

const arr = digitize(35231);

arr.forEach(e => {
    console.log(e);
});
