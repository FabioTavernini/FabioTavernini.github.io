var folder = "../../img/projects/photography/";

var dir = "../../img/projects/photography/";
var fileextension = ".JPG";
$.ajax({
  //This will retrieve the contents of the folder if the folder is configured as 'browsable'
  url: dir,
  success: function (data) {
    //Lsit all png file names in the page
    $(data).find("a:contains(" + fileextension + ")").each(function () {
      var filename = this.href.replace(window.location.pathname, "").replace("http://", "");
      var pathName = filename.substring(filename.lastIndexOf('/') + 1);
      $("#images").append($("<img src=" + dir + pathName + "></img>"));
      console.log(dir + pathName);
    });
  }
});