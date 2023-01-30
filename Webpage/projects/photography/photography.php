<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylephotography.css">
    <link rel="icon" href="../../inc/favicon/code-solid.svg">
    <title>photography</title>

    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>

</head>

<body>
    <div id="nav-placeholder"></div>

    <script>
        $(function() {
            $("#nav-placeholder").load("../inc/navbar/navbar.html");
        });
    </script>

    <h1>Photography</h1>

    <div id="einleitung">
        <a>i know someday i'll have to dort all these...</a>
    </div>
    <br>

    <?php

    $dirname = "../../img/projects/photography/";
    $images = glob($dirname . "*.JPG");

    foreach ($images as $image) {
        $Filename = basename($image);
        echo '<img alt="' . $Filename . '" title="' . $Filename . '" src="' . $image . '" /><br />';
    }
    ?>

    <div id="footer-placeholder"></div>

    <script>
        $(function() {
            $("#footer-placeholder").load("../inc/footer/footer.html");
        });
    </script>

</body>

</html>