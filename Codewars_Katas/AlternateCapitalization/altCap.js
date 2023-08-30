function capitalize(s){
    let altCap = [s, s];

    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            altCap[0] = altCap[0].substring(0, i) + altCap[0][i].toUpperCase() + altCap[0].substring(i + 1);
        } else {
            altCap[1] = altCap[1].substring(0, i) + altCap[1][i].toUpperCase() + altCap[1].substring(i + 1);
        }
    }

    return altCap;
};

capitalize("hello");