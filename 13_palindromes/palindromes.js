const palindromes = function (string) {
    // a good way to get rid off unnecessary 
    const clean_string = string.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reverse = clean_string.split('').reverse().join('');
    return clean_string === reverse;
};

// Do not edit below this line
module.exports = palindromes;
