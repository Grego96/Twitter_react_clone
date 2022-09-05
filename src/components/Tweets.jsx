import React from "react";
import Tweet from "./Tweet";

export default function Tweets({ tweets, updateTweets }) {
  return (
    <>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet._id} updateTweets={updateTweets} />;
      })}
    </>
  );
}
