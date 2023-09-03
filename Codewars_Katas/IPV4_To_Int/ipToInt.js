function ipToInt32(ip){
    const splitIp = ip.split('.');
    const ipBits = parseInt(splitIp[0]).toString(2).length;
    let ipStr = '';
    for (let i = 0; i < splitIp.length; i++) {
        let currBinary = parseInt(splitIp[i]).toString(2);
        let zeros = '';
        if (currBinary.length < ipBits) {
            do {
                zeros += '0';
            } while (`${zeros}${currBinary}`.length != ipBits);
        }
        ipStr += zeros+currBinary
    }
    const num = parseInt(ipStr, 2);
    return num;
}

console.log(ipToInt32('128.32.10.1'));