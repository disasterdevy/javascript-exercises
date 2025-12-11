const fibonacci = function(n) {
    let num_one = 0
    let num_two = 1
    let fib = 0
    // converting n to an integer
    n_num = Number(n);

    if(n_num >= 0){
        for(n_num;n_num > 1; n_num--){
            fib = num_one + num_two;
            num_one = num_two;
            num_two = fib;
        };
        return fib;
    }
    else
        return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
