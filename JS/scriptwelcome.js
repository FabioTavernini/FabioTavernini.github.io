// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    if (name != '') {

        location.href = "./webpage/index.html";

    }

});

window.addEventListener("click", function(event) {
    location.href = "./webpage/index.html";
});

