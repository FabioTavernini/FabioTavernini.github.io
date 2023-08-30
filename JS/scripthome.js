function toggleBW() {
    var element = document.body;
    element.classList.toggle("darkmode");

    var element = document.getElementById('scroll2explore');
    element.classList.toggle("darkmodescroll");
}


let mybutton = document.getElementById("btnBackToTop");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 20);
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    let userAgent = navigator.userAgent;

    if (userAgent.match(/chrome|chromium|crios/i)) {
        scrollToTop();
    } else if (userAgent.match(/firefox|fxios/i)) {
        scrollToTop();
    } else if (userAgent.match(/safari/i)) {
        document.body.scrollTop = 0; // For Safari
    } else if (userAgent.match(/opr\//i)) {
        scrollToTop();
    } else if (userAgent.match(/edg/i)) {
        scrollToTop();
    } else {

    }

};