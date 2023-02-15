// 0 1 1 2 3 5 8...

// fib(n) = fib(n-1) + fib(n-2)

const fibMap = {};

function fibonacci(n) {
    if(n === 0) {
        return 0;
    } else if(n === 1) {
        return 1;
    } else if(fibMap.hasOwnProperty(n)) {
        return fibMap[n];
    }
    else {
        fibMap[n] = fibonacci(n-1) + fibonacci(n-2);
        return fibMap[n];
    }
}


console.log(fibonacci(1000));