// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    if (name != '') {
        location.href = "./webpage/index.html";
    }
});

if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener("click", function(event) {
        location.href = "./webpage/index.html";
    });
  }