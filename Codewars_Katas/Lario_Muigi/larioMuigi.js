function pipeFix(numbers){
    const fixedPipe = [];

    for (let i = Math.min(numbers); i <= Math.max(numbers); i++) {
        fixedPipe.push(i);
    }

    return fixedPipe;
}