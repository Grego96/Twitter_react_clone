import React from "react";
import Tweet from "./Tweet";

export default function Tweets({ tweets }) {
  return (
    <>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet.id} />;
      })}
    </>
  );
}
