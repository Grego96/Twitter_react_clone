import React from "react";
import { Link } from "react-router-dom";
import comment from "./TweetSVG/comment-regular.svg";
import retweet from "./TweetSVG/retweet-solid.svg";
import heart from "./TweetSVG/heart-regular.svg";
import fullHeart from "./TweetSVG/heart-solid.svg";
import share from "./TweetSVG/arrow-up-from-bracket-solid.svg";
import "./TweetStyles.css";
import axios from "axios";

function Tweet({ tweet }) {
  async function like(id) {
    const result = await axios({
      method: "PATCH",
      baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/tweets/${id}/like`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN_TEST}`,
      },
    });
    console.log(result);
  }
  // console.log(tweet);

  return (
    <>
      <div className="d-flex  w-100 bodyPrueba">
        <div className="px-3">
          {tweet.user.profileImage.includes("http") ? (
            <img src={tweet.user.profileImage} className="profileImage" alt="Profile" />
          ) : (
            <img src={`./img/${tweet.user.profileImage}`} className="profileImage" alt="Profile" />
          )}
        </div>
        <div className="px-3 w-100">
          <div>
            <h6>
              <strong>
                <Link className="linkStyles" to={`/profile/${tweet.user._id}`}>{`${
                  tweet.user.firstname + " " + tweet.user.lastname
                }`}</Link>
              </strong>
            </h6>
            <Link className="user linkStyles" to={`/profile/${tweet.user._id}`}>
              @{tweet.user.username}
            </Link>
            <p>{tweet.text}</p>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="d-flex justify-content-evenly align-items-center pruebaIconsDiv">
        <img src={comment} alt="Comment icon" className="tweet-icons" />
        <img src={retweet} alt="Retweet icon" className="tweet-icons" />

        <img onClick={() => like(tweet._id)} src={heart} alt="Heart icon" className="tweet-icons" />

        <img src={share} alt="Share icon" className="tweet-icons" />
      </div>
      <hr />
    </>
  );
}

export default Tweet;
