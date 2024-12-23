function isPrefixOfWord(sentence: string, searchWord: string): number {

    let words: string[] = sentence.split(' ');

    //console.log(words);
    for (let word of words) {
        let sample = word.substring(0, searchWord.length);
       // console.log(`word = ${word} searchWord.length= ${searchWord.length} && sample=${sample}`);
        if (word.length >= searchWord.length && sample == searchWord) {
            return words.indexOf(word)+1;
        }
    }
    return -1;
};

console.log(isPrefixOfWord('"i love eating burger', 'burg'));