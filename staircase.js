function main(n) {
    for (let i = 1; i <= n; ++i) {
        let text = ''
        for (let j = i; j < n; ++j) {
            text += ' '
        }
        for (let j = 0; j < i; ++j) {
            text += '#'
        } 
        console.log(text)
    }
    // this algorithm doesn't have return.
}
