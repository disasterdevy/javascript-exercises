const getTheTitles = function(array) {
    const results = []
    // how do I access properties of an object through a function? 
    // map() apparently makes the keys and values of an object known, so they don't have to be passed     
    return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
