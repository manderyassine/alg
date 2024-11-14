// Helper function to determine the type of character
function getCharacterType(char) {
    const separators = [' ', ',', '.', ';', ':', '!', '?'];

    if (/[a-zA-Z]/.test(char)) return 'letter';
    if (/[0-9]/.test(char)) return 'digit';
    if (separators.includes(char)) return 'separator';
    return 'special';
}

// Main function to analyze the sentence
function analyzeSentence(sentence) {
    let counts = { letters: 0, digits: 0, separators: 0, specials: 0 };

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Stop processing if we reach '#'
        if (char === '#') break;

        // Determine the character type and increment the corresponding count
        switch (getCharacterType(char)) {
            case 'letter':
                counts.letters++;
                break;
            case 'digit':
                counts.digits++;
                break;
            case 'separator':
                counts.separators++;
                break;
            case 'special':
                counts.specials++;
                break;
        }
    }

    // Display results
    console.log("Number of letters:", counts.letters);
    console.log("Number of digits:", counts.digits);
    console.log("Number of separators:", counts.separators);
    console.log("Number of special characters:", counts.specials);
}

// Example usage
let sentence = "Hello, world!#";
analyzeSentence(sentence);
