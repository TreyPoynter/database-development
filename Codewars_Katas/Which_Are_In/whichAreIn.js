function inArray(array1,array2){
    const inArr = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j].includes(array1[i]) && !inArr.includes(array1[i])) {
                inArr.push(array1[i]);
            }
        }
    }
    return inArr.sort();
}

a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

const inArr = inArray(a1, a2);

console.log(inArr);