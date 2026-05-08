/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
    const result = [];
    const currentSubset = [];

    nums.sort((a, b) => a - b);

    function backtrack(startIndex) {
        result.push([...currentSubset]);

        for (let currentIndex = startIndex; currentIndex < nums.length; currentIndex++) {
            if (
                currentIndex > startIndex &&
                nums[currentIndex] === nums[currentIndex - 1]
            ) {
                continue;
            }

            currentSubset.push(nums[currentIndex]);
            backtrack(currentIndex + 1);
            currentSubset.pop();
        }
    }

    backtrack(0);

    return result;
}
