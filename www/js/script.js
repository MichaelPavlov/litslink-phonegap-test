$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    //uncomment for testing in Chrome browser
//    onDeviceReady();
});


function onDeviceReady() {
    var dateString;
    var lastDate;
    $(".date-ui").click(function () {
        var options = {
            date: (!lastDate) ? new Date() : lastDate,
            mode: 'date'
        };
        datePicker.show(options, function (date) {
            if (date == "cancel") return false;
            lastDate = date;
            dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            $("#birth-date").val(dateString);
        });        
    });
    $(".btn-blue").click(function () {
        var template = [
            '<div class="child-item add-child-item">',
            '<div class="child-item__icon"></div>',
            '<span class="child-item__date">' + dateString + '</span>',
            '<div class="child-item__x">X</div>',
            '</div>'
        ].join("\n");

        $(".btn-blue").after(template);
    });

    $("body").on("click", ".child-item__x", function () {
        var childItem = $(this).parent();
        childItem.removeClass("add-child-item").addClass("remove-child-item");

        setTimeout(function () {
            childItem.remove();
        }, 600);
    });
}