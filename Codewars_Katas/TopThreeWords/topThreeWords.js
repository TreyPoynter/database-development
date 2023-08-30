function topThreeWords(text) {
    const words = text.toLowerCase().match(/\w+/g);
    const wordCount = {};

    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    return Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]).slice(0, 3);
}