// External files make your code organized and easier to maintain
console.log("This is the log for the 🔥EXTERNAL🔥JavaScript");

const someConstantVariable = 'Something';
const two = 1 + 1;

if(1 + 1 == 2) {
    // This code runs
} else {
    // This code runs
}


function showCountdown() {
    let counter = 100;
        setInterval(() => {
            counter--;
            document.querySelector('#console-magic-header').innerHTML = `<h1> Changed With Javascript ${counter}</h1>`;
        }, 1000);

}


showCountdown();


