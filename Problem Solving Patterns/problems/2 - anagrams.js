// stringOne = "daniel"
// stringTwo = "pedro"

// this function verifies if the second string is 
// an anagram of the first string

// An anagram is a word, phrase, or name formed by rearranging the 
// letters of another, such as cinema, formed from iceman.

// firstString = daniela
console.log(isAnagram("daniela", "aleinad"));
function isAnagram(firstString, secondString) {
    if (firstString.length !== secondString.length) return false;

    let letterLookup = {
        //'d': 1,
        //'a': 2,
        //'n': 1,
        //'i': 1,
        //'e': 1,
        //'l': 1
    };

    // O(n)
    for (let character of firstString) {
        character = character.toLowerCase();
        if(!(character in letterLookup)) letterLookup[character] = 0;
        letterLookup[character] += 1;
    };

    // O(n)
    for (let character of secondString) {
        character = character.toLowerCase();
        if(!(character in letterLookup)) return false;
        letterLookup[character] -= 1;
        if (letterLookup[character] === 0) delete letterLookup[character];
    }

    // O(1)
    return true;
}
