function showNumber() {
    var inputNumber = document.getElementById("inputNumber");

    // hide number input
    inputNumber.style.display = 'none';
    document.getElementById("guessBtn").style.display = 'none';

    // show loading text
    var loadingText = document.getElementById("loadingText");
    loadingText.style.display = 'block';

    // run loading bar
    const loadingBar = document.getElementById("loadingBar");
    const bar = document.getElementById("bar");
    loadingBar.style.display = 'block';
    var width = 1;
    var id = setInterval(frame, 15);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }

    // hide loading bar after completion
    setTimeout(() => {
        loadingBar.style.display = 'none';
    }, 2000)

    // show loading circle
    const loadingCircle = document.getElementById("loadingCircle");

    setTimeout(() => {
        loadingCircle.style.display = 'block';
    }, 2000)

    // hide loading circle and thinking text again
    setTimeout(() => {
        loadingCircle.style.display = 'none';
        loadingText.style.display = 'none';
    }, 4000)
    
    // show number
    var numberDisplay = document.getElementById("numberDisplay");
    var numberReveal = document.getElementById("numberReveal");

    setTimeout(() => {
        numberDisplay.innerText = "I've got it!";
        numberReveal.style.display = 'block';
    }, 4000)

    setTimeout(() => {
        numberReveal.innerText += " " + inputNumber.value;
    }, 5500)

}

// refresh page 
function resetSystem() {
    window.location.reload();
    return false;
}