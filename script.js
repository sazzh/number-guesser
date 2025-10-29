function showNumber() {
    var x = document.getElementById("inputNumber");
    document.getElementById("numberDisplay").innerText = x.value;

    // run loading bar
    const loadingBar = document.getElementById("loadingBar");
    var width = 1;
    var id = setInterval(frame, 15);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }
}