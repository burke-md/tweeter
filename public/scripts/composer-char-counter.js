let charsRemaining = 140;
const charCount = () => {
  charsRemaining -= 1;
  if (charsRemaining > 0) {
    return true;
  }
  return false;
};

$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    const counter = $(this).closest(".new-tweet").find(".counter");
    if (!charCount()) {
      $(counter).addClass("negCharCount");
      console.log("negitive count");
    }
    $(counter).val(charsRemaining);
  });
});
