if (document.readyState === 'complete') {
    callback();
} else {

    // Add event listener on keydown
    document.addEventListener('keydown', (event) => {
        var name = event.key;

        if (name != '') {
            location.href = "./webpage/index.html";
        }
    });

    document.addEventListener("click", function (event) {
        location.href = "./webpage/index.html";
    });

    document.addEventListener('touchstart', function(event) {
        location.href = "./webpage/index.html";
    }, false);

}