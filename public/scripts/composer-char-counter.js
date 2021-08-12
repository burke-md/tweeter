$(document).ready(function () {
  $("#tweet-text").on("keydown", function (event) {
    //Deal with backspace/removing characters from field.
    if (event.keyCode === 8) {
      if (charsRemaining < 140) {
        incCharCount();
      }
    } else {
      decCharCount();
    }

    const counter = $(this).closest(".new-tweet").find(".counter");
    $(counter).val(charsRemaining);

    if (isBelowCount()) {
      $(counter).addClass("negCharCount");
    } else if ($(counter).hasClass("negCharCount")) {
      $(counter).removeClass("negCharCount");
    }
  });
});

let charsRemaining = 140;

const isBelowCount = () => charsRemaining < 0;

const decCharCount = () => {
  charsRemaining -= 1;
  return charsRemaining;
};

const incCharCount = () => {
  charsRemaining += 1;
  return charsRemaining;
};
