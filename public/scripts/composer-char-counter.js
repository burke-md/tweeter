$(document).ready(function () {
  $("#tweet-text").on("input", characterCounter);
});

const characterCounter = function () {
  const maxChar = 140;
  const fieldCharCount = $(this).val().length;
  const counter = $(this).closest(".new-tweet").find(".counter");
  
  $(counter).val(maxChar - fieldCharCount);
  
  if (fieldCharCount > maxChar) {
    $(counter).addClass("negCharCount");
  } else if ($(counter).hasClass("negCharCount")) {
    $(counter).removeClass("negCharCount");
  }
};

