"use strict";

$(function () {
  $("#birth-date").datepicker();
});

$(document).ready(function () {
  $(".btn-blue").click(function () {
    var date = $("#birth-date").datepicker({
      dateFormat: 'yy-mm-dd'
    }).val();
    var template = [
      '<div class="child-item add-child-item">',
        '<div class="child-item__icon"></div>',
        '<span class="child-item__date">' + date + '</span>',
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
});