function anagramDifference(w1,w2){
    const biggerWord = w1.length > w2.length ? w1 : w2;
    let diff = 0;

    for (let i = 0; i < biggerWord.length; i++) {
        const element = biggerWord[i];
        if (!w1.contains(w2[i])) {
            w1.replace()
        }
    }

    return diff;
}