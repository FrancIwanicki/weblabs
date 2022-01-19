let text = document.getElementById('text');
let status = document.getElementById('status');

function startSearch() {
    text.innerHTML = '';
    Button.disabled = true;
    let fromNumber = document.getElementById("from").value;
    let toNumber = document.getElementById("to").value;


    worker = new Worker("PrimeWorker.js");
    worker.onmessage = receivedWorkerMessage;

    worker.postMessage(
        {
            from: fromNumber,
            to: toNumber
        }
    );
    if (window.Worker) {
        status.innerHTML = "Відбувається пошук простих чисел ";
        worker.onmessage = receivedWorkerMessage;
        worker.onerror = workerError;
    } else {
        status.innerHTML = "Відбувається пошук простих чисел ";
        findPrimes(fromNumber, toNumber);
    }
}

function workerError(error) {
    text.innerHTML = error.message;
}

function receivedWorkerMessage(event) {
    notifyMe();
    let primes = event.data;

    text.innerHTML = primes.join('\n');

    if (primes.length == 0) {
        status.innerHTML = "Error.";
    } else {
        status.innerHTML = "Знайдено!";
    }
    Button.disabled = false;
}

function stopSearch() {
    worker.terminate();
    worker = null;
    status.innerHTML = "Стоп.";
    Button.disabled = false;
}


document.addEventListener('visibilitychange', function (e) {
    if (document.visibilityState = "hidden")
        setTimeout(messageHidden, 60 * 1000);
});

navigator.geolocation.getCurrentPosition(
    function (position) {
        alert('Ваші координати:\n' +
            position.coords.latitude + ", " + position.coords.longitude);

    }
);

function notifyMe() {

    if (!("Notification" in window)) {
        alert("This browser does'nt support desktop notification");
    } else if (Notification.permission === "granted") {

        let notification = new Notification("Прості числа знайдені!");
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {

            if (permission === "granted") {
                let notification = new Notification("Прості числа знайдені!");
            }
        });
    }
}

function messageHidden() {
    let notificationHidden = new Notification("Сторінка неактивна вже хвилину!");
}