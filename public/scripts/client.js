$(document).ready(function () {
  $("#tweet-form").submit(submit);
  $("#error-message").hide();

  loadTweets();
});

const escape = (str) => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweetData) => {
  const newTweet = $(`
  <article>
  <header class="tweet-head">
  <figure>
  <img src=${tweetData.user.avatars} alt="Profile Pic" />
  </figure>
  <section>
  ${tweetData.user.name}
  <span class="handle"> ${tweetData.user.handle}</span>
  </section>
  </header>
  <section class="tweet-body">
  ${escape(tweetData.content.text)}
  </section>
  <footer class="tweet-footer">
  ${timeago.format(tweetData.created_at)}
  <span class="footer-icons">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </span>
  </footer>
  </article>
  `);
  return newTweet;
};

const renderTweets = (obj) => {
  const container = $("#tweets-container");
  container.empty();

  obj.forEach((tweetObj) => {
    $("#tweets-container").prepend(createTweetElement(tweetObj));
  });
};

//Load tweets from DB
const loadTweets = () => {
  $.ajax("/tweets", { method: "GET" }).then(function (tweetsJSON) {
    renderTweets(tweetsJSON);
  });
};

//Submit tweet to DB w/ error checking
const submit = function (event) {
  event.preventDefault();
  const data = $(event.target).serialize();
  const target = $("#counter");
  const counter = Number(target.val());
  $("#error-message").hide();

  if (counter === 140) {
    $("#error-message").text("Have you nothing interesting to say?");
    $("#error-message").slideDown();
    return;
  }
  if (counter <= 0) {
    $("#error-message").text("Max Character Limit Exceeded");
    $("#error-message").slideDown();
    return;
  }

  $.post("/tweets", data).then((data) => {
    loadTweets();

    $("#tweet-text").val("");
  });
};
