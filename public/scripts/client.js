/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

const renderTweets = (obj) => {
  obj.forEach((tweetObj) => {
    $("#tweets-container").append(createTweetElement(tweetObj));
  });
};

$(document).ready(function () {
  console.log("ready!");

  //Subimt behavior
  $(".new-tweet").submit(function (event) {
    event.preventDefault();
    const data = $(event.target).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: data,
    });
  });

  //Load tweets from DB
  const loadTweets = () => {
    $.ajax("/tweets", { method: "GET" }).then(function (tweetsJSON) {
      renderTweets(tweetsJSON);
    });
  };

  loadTweets();
});
