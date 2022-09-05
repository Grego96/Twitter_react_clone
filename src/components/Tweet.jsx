import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import retweet from "./TweetSVG/retweet-solid.svg";
import comment from "./TweetSVG/comment-regular.svg";
import share from "./TweetSVG/arrow-up-from-bracket-solid.svg";
import heart from "./TweetSVG/heart-regular.svg";
import fullHeart from "./TweetSVG/heart-solid.svg";
import "./TweetStyles.css";

function Tweet({ tweet }) {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(false);

  async function like(id) {
    await axios({
      method: "PATCH",
      baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/tweets/${id}/like`,
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  function isTweetLiked() {
    const isLiked = tweet.likes.some((userId) => {
      return userId === user.value._id;
    });
    setIsLiked(isLiked);
  }

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  useEffect(() => {
    isTweetLiked();
  }, []);

  return (
    <div className="horizontalLines">
      <div className="separation">
        <div className="d-flex  w-100 bodyPrueba">
          <div className="px-1 tweetRectangle">
            {tweet.user.profileImage.includes("http") ? (
              <img src={tweet.user.profileImage} className="profileImage" alt="Profile" />
            ) : (
              <img
                src={`./img/${tweet.user.profileImage}`}
                className="profileImage"
                alt="Profile"
              />
            )}
          </div>
          <div className="px-1 w-100">
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
        <div className="d-flex justify-content-around align-items-center pruebaIconsDiv">
          <img src={comment} alt="Comment icon" className="tweet-icons" />
          <img src={retweet} alt="Retweet icon" className="tweet-icons" />

          <img
            onClick={() => {
              like(tweet._id);
              toggleLike();
            }}
            src={isLiked ? fullHeart : heart}
            alt="Heart icon"
            className="tweet-icons"
          />

          <img src={share} alt="Share icon" className="tweet-icons" />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
