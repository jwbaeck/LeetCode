/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
    const word1Length = word1.length;
    const word2Length = word2.length;

    const minOperations = Array.from(
        { length: word1Length + 1 },
        () => Array(word2Length + 1).fill(0)
    );

    for (let word1Index = 0; word1Index <= word1Length; word1Index++) {
        minOperations[word1Index][0] = word1Index;
    }

    for (let word2Index = 0; word2Index <= word2Length; word2Index++) {
        minOperations[0][word2Index] = word2Index;
    }

    for (let word1Index = 1; word1Index <= word1Length; word1Index++) {
        for (let word2Index = 1; word2Index <= word2Length; word2Index++) {
            const word1Char = word1[word1Index - 1];
            const word2Char = word2[word2Index - 1];

            if (word1Char === word2Char) {
                minOperations[word1Index][word2Index] =
                    minOperations[word1Index - 1][word2Index - 1];
            } else {
                const deleteOperation =
                    minOperations[word1Index - 1][word2Index];

                const insertOperation =
                    minOperations[word1Index][word2Index - 1];

                const replaceOperation =
                    minOperations[word1Index - 1][word2Index - 1];

                minOperations[word1Index][word2Index] =
                    Math.min(
                        deleteOperation,
                        insertOperation,
                        replaceOperation
                    ) + 1;
            }
        }
    }

    return minOperations[word1Length][word2Length];
}
