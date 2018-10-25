onmessage = function() {
    console.log('Message received from main script');
    var workerResult = 'Hello world.');
    postMessage(workerResult);
  }