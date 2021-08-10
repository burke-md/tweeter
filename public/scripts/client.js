/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

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
  console.log("ready!");

  const renderTweets = (obj) => {
    obj.forEach((tweetObj) => {
      console.log("new tweet has been constructed");
      $("#tweets-container").append(createTweetElement(tweetObj));
    });
  };

  renderTweets(data);
});
