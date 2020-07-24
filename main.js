const timeout = () => {
    console.log('timeout');
    setTimeout(() => {
        timeout();
    }, 500);
}

console.log("happy");

timeout();