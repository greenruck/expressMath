function frequencyCount(arr){
    return arr.reduce(function(acc, next){
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

function mathMode(arr) {
    let freq = frequencyCount(arr);

    let count = 0;
    let mostFreq;

    for (let key in freq) {
        if (freq[key] > count) {
            mostFreq = key;
            count = freq[key];
        }
    }
    return mostFreq;
}
function convertValidate(numString) {
    let result = [];
    
    for (let i = 0; i < numString.length; i++){
        let valNumber = Number(numString[i]);

        if (Number.isNaN(valNumber)){
            return new Error(
                `The value '${numString[i]}' at index ${i} is not a valid number.`
            );
        }
        result.push(valNumber);
    }
    return result;
}

function mathMean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur){
        return acc + cur;
    }) / nums.length
}

function mathMedian(nums){
    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    }else{
        median = nums[middleIndex];
    }
    return median
}

module.exports = {
    frequencyCount,
    mathMean,
    mathMedian,
    mathMode,
    convertValidate
};