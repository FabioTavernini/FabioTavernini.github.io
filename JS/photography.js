function showBig(x) {
            
    var gallery = document.getElementById('gallery');
    var canvas = document.getElementById('canvas');
    css = 'max-height: -webkit-fill-available;max-width: -webkit-fill-available;';


    if (canvas.style.display === "none") {

        //canvas.style.cssText += css;

        canvas.style.display = "block"
        canvas.innerHTML = "<p>" + x.alt + "</p>"
        //canvas.innerHTML += "<a href='" + x.src + "'><img style='" + css + "' src='" + x.src + "'></a>"
        canvas.innerHTML += "<img style='" + css + "' src='" + x.src + "'>"

        gallery.style.display = "none";

        canvas.addEventListener("click", function (event) {
            if (canvas.style.display === "block") {
                canvas.style.display = "none";
                gallery.style.display = "block"
            } else {
            }
        });

        document.addEventListener('keydown', (event) => {
        
            if (event.key === 'Escape') {
             
                if (canvas.style.display === "block") {
                    canvas.style.display = "none";
                    gallery.style.display = "block"
                } else {
                }
            }
        });

    } else {
    }
}