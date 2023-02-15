var isUnique = function(arr) {
    const countOfNumberOccurrences = {}
    for(const number of arr) {
        if(!countOfNumberOccurrences.hasOwnProperty(number)) {
            countOfNumberOccurrences[number] = 1;
        } else {
            return false;
        }
    }
    return true;
};