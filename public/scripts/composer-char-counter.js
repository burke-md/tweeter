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

$(document).ready(function () {
  
  $("#tweet-text").on("keydown", function (event) {
    if (event.keyCode === 8) {
      if(charsRemaining < 140){
        incCharCount();        
      }
    } else{
      decCharCount();
    }


    console.log("", event.keyCode);
    const counter = $(this).closest(".new-tweet").find(".counter");

    if (isBelowCount()) {
      $(counter).addClass("negCharCount");
    } else if ($(counter).hasClass("negCharCount")) {
      $(counter).removeClass("negCharCount");
    }

    $(counter).val(charsRemaining);
  });
});
