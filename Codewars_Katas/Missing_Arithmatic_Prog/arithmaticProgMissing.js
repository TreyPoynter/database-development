var findMissing = function (list) {  
    const prog = list[2]-list[1];
    if (prog<0)
        prog*-1;
    let missing = 0;
    let currDigit = list[0];
    for (let i = 0; i <= list.length; i++) {
        if (list[i] != currDigit) {
            missing = currDigit;
            break;
        }
        currDigit+=prog;
    }
    return missing;
}

const missing = findMissing([1, 3, 5, 9, 11]);

console.log(missing);
