var folder = "../../img/projects/photography/";
var fileextension = ".JPG";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(JPG|jpe?g|png|gif)$/) ) { 
                $("#images").append( "<img src='"+ folder + val +"'>" );
            } 
        });
    }
});