function main(arr) {
    let leftDgn = 0;
    let rightDgn = 0;

    for (let i = 0; i < arr.length; i++) {
        rightDgn += arr[i][arr.length - i - 1];
        leftDgn += arr[i][i];
    }
    let matrix = Math.abs(rightDgn - leftDgn);

    return matrix;
}
