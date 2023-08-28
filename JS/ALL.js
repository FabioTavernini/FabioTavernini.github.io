

const date = new Date();
let year = date.getFullYear();



document.getElementById('nav-placeholder').innerHTML = (`<nav class="navbar">
<a id="navindex" href="https://tavernini.online/Webpage/index.html">HOME</a>
<a id="navprojects" href="https://tavernini.online/Webpage/Projects.html">PROJECTS</a>
<a id="navabout" href="https://tavernini.online/Webpage/About.html">ABOUT</a>
<a id="navsocial" href="https://tavernini.online/Webpage/social.html">SOCIAL</a>
</nav>`);

document.getElementById('footertext').innerHTML = ("Fabio Tavernini - " + year);



