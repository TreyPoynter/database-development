function goodVsEvil(good, evil){
    let goodScore = 0;
    let evilScore = 0;
    
    for (let i = 0; i < evil.split(' ').length; i++) {
        let goodUnits = good.split(' ')[i];
        let evilUnits = evil.split(' ')[i];

        switch (i+1) {
            case 3:
                goodScore+=3*goodUnits;
                evilScore+=2*evilUnits;
                break;
            case 4:
                goodScore+=3*goodUnits;
                evilScore+=2*evilUnits;
                break;
            case 5:
                goodScore+=4*goodUnits;
                evilScore+=3*evilUnits;
                break;
            case 6:
                goodScore+=10*goodUnits;
                evilScore+=5*evilUnits;
                break;
            case 7:
                evilScore+=10*evilUnits;
                break;
            default:
                goodScore+=(i+1)*goodUnits;
                evilScore+=(i+1)*evilUnits;
        }
    }
    

    if (goodScore > evilScore) {
        return 'Battle Result: Good triumphs over Evil';
    } else if (evilScore > goodScore) {
        return 'Battle Result: Evil eradicates all trace of Good';
    }
    return 'Battle Result: No victor on this battle field';
}

const outcome = goodVsEvil('0 1 1 1 1 1', '1 1 1 1 1 1 1');

console.log(outcome);