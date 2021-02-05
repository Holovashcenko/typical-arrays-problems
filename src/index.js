exports.min = function min(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    const arr = array.sort((a, b) => a - b);
    return arr[0];
};

exports.max = function max(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    const arr = array.sort((a, b) => a - b);
    return arr[arr.length - 1];
};

exports.avg = function avg(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    const arr = array.reduce((acc, current) => acc + current, 0) / array.length;
    return arr;
};
