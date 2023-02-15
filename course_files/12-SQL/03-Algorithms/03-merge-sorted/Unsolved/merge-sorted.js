// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    // Given two arrays, arr1 and arr2
     // Return a merged array that contains all elms from both arr1 and 2...in sorted order
     
    let i = 0;
    let j = 0;
    const result = [];

    while(i < arr1.length || j < arr2.length) {
        if(arr1[i] < arr2[j] || j >= arr2.length) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }

    return result;
};
