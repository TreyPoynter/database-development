function getLengthOfMissingArray(arrayOfArrays) {
    let currLength = 0;
    if (!arrayOfArrays || arrayOfArrays.length === 0 || arrayOfArrays.contains(null)) {
        return currLength;
    }
    arrayOfArrays.sort((a, b) => a.length - b.length);
    if (!arrayOfArrays[0]) {
        return 0;
    }
    currLength = arrayOfArrays[0].length;
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (!arrayOfArrays[i] || arrayOfArrays[i].length === 0) {
            return 0;
        }
        if (arrayOfArrays[i].length != currLength) {
            break;
        }
        ++currLength;
    }
    return currLength;
}

const arrs = [[],
[2, 4, 4],
[2, 1],
[1, 1, 2, 1]];

console.log(getLengthOfMissingArray(arrs));

