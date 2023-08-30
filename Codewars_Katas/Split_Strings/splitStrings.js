function solution(str){
   const splitStr = [];

   for (let i = 0; i < str.length; i+=2) {
    const letter1 = str[i];
    let letter2 = str[i+1];
    if (!letter2) {
        letter2 = '_';
    }
    splitStr.push(`${letter1}${letter2}`);
   }

   return splitStr;
}

const splitStr = solution("abcde");

for (let index = 0; index < splitStr.length; index++) {
    console.log(`${splitStr[index]}`);
}