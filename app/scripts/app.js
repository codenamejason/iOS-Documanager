(function () {
    document.addEventListener("deviceready", function () {

        window.listview = kendo.observable({
            addImage: function () {
                var success = function (data) {
                    $("#images")
                        .data("kendoMobileListView")
                        .prepend(["data:image/jpeg;base64," + data]);
                };
                var error = function () {
                    navigator.notification.alert("Unfortunately we could not add the image");
                };
                var config = {
                    destinationType: Camera.DestinationType.DATA_URL,
                    targetHeight: 400,
                    targetWidth: 400,
                    encodingType: Camera.EncodingType.PNG
                };
                navigator.camera.getPicture(success, error, config);
            }
        });


        var app = new kendo.mobile.Application(document.body, {
            skin: "flat"
        });


        $("#images").kendoMobileListView({
            dataSource: [
      "images/01.jpg",
      "images/02.jpg",
      "images/03.jpg",
      "images/04.jpg",
      "images/05.jpg",
      "images/06.jpg",
      "images/07.jpg"
  ],
            template: "<img src='#: data #'>"
        });



        navigator.splashscreen.hide();
    });
}());