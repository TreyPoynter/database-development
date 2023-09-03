function isMerge(s, part1, part2) {
    if (s.length === 0) {
        return part1.length === 0 && part2.length === 0;
    }
    
    if (part1.length > 0 && s[0] === part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) {
        return true;
    }
    
    if (part2.length > 0 && s[0] === part2[0] && isMerge(s.slice(1), part1, part2.slice(1))) {
        return true;
    }
    
    return false;
}

console.log(isMerge('codewars', 'code', 'wasr'));