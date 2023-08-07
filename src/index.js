module.exports = function reverse(n) {
    let str = n.toString();

    if (n < 0) {
        str = str.slice(1);
    }

    let result = '';

    for (let i = str.length; i > 0; i--) {
        result = result + str[i - 1];
    }

    return +result;
}
