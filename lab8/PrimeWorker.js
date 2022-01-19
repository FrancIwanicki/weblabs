onmessage = function (event) {
    let primes = findPrimes(event.data.from, event.data.to, []);
    postMessage(primes);
};

function findPrimes(fromNumber, toNumber, primes) {
    let list = [];
    for (let i = fromNumber; i <= toNumber; i++) {
        if (i > 1) list.push(i);
    }
    let maxDiv = Math.round(Math.sqrt(toNumber));


    for (let i = 0; i < list.length; i++) {
        let start = performance.now();
        let failed = false;
        for (let j = 2; j <= maxDiv; j++) {
            if ((list[i] != j) && (list[i] % j == 0)) {
                failed = true;
            } else if ((j == maxDiv) && (failed == false)) {
                let end = performance.now();
                primes.push(list[i] + ' - ' + (end - start));
            }
        }
    }
    return primes;
}

let primes = [];


function saveData() {

    localStorage["localData"] = primes;
}

function loadData() {

    let localData = localStorage["localData"];

    if (localData != null) {
        primes = localData;
        onmessage = function (event) {
            let primes = findPrimes(event.data.from, event.data.to, primes);
            postMessage(primes);
        };
    }
}

onload = function () {
    loadData();
};