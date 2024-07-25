function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    const oddIndex = [];
    for (let i in arr) {
        if (i % 2 !== 0) {
            oddIndex.push(arr[i]);
	};
    };
    return oddIndex;
};

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    const revOddIndex = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            revOddIndex.push(arr[i]);
        };
    };
    return revOddIndex;
};

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let powArr = [];
    let outputArr = [];
    for (let i = 0; i < arr.length; i++) {
        powArr.push(Math.pow(2, i))
    };
    
    for (i of powArr) {
        if (i < arr.length) {
            outputArr.push(arr[i])
        };
    };
    return outputArr;
};

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let powArr = [];
    let outputArr = []; 
    for (let i = 0; i < arr.length; i++) {
        powArr.push(Math.pow(n, i))
    };
    
    for (i of powArr) {
        if (i < arr.length) {
            outputArr.push(arr[i])
        };
    };
    return outputArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let firstHalfArr = [];
    if (arr.length % 2 === 0) {
        for (i = 0; i < arr.length / 2; i++) {
            firstHalfArr.push(arr[i]);
        }
    } else {
        for (i = 0; i <= arr.length / 2; i++) {
            firstHalfArr.push(arr[i]);
        };
    };
    return firstHalfArr;
};

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let secondHalfArr = [];
    if (arr.length > 0 && arr.length / 2 === 0) {
        secondHalfArr.push(newArray[1]);
    } else if (arr.length % 2 === 0) {
        for (i = arr.length / 2; i < arr.length; i++) {
            secondHalfArr.push(arr[i]);
        };
    } else {
        for (i = (arr.length / 2) + 1; i < arr.length; i++) {
            secondHalfArr.push(newArray[i]);
        };
    };
    return secondHalfArr;
};

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
