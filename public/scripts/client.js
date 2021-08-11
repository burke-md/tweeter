
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
  ${tweetData.content.text}
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

$(document).ready(function () {
  $(".new-tweet").submit(submit);

  loadTweets();
});

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

const submit = function (event) {
  event.preventDefault();
  const data = $(event.target).serialize();
  const target = $("#counter");
  const counter = Number(target.val());

  if (counter === 140) {
    alert("Nothing has been entered");
    return;
  }
  if (counter <= 0) {
    alert("Too many chars");
    return;
  }

  $.post("/tweets", data).then((data) => {
    loadTweets();
  });
};
