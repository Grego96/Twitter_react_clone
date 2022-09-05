import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import profileDefaultImg from "../a0e243b3a508306970f49bc00.jpg";
import "./CreateTweetStyles.css";

function CreateTweet({ updateTweets }) {
  const [tweet, setTweet] = useState("");
  const [tweetMessage, setTweetMessage] = useState("");
  const [profileImg, setprofileImg] = useState("");
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (userData.value.profileImage) {
      setprofileImg(userData.value.profileImage);
    }
  }, [userData]);

  const storeTweet = async function () {
    try {
      const result = await axios({
        method: "post",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/tweets`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        data: { text: tweet },
      });
      console.log(result);
      setTweetMessage("");
    } catch (error) {
      setTweetMessage(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="home">Home</h2>
      <div className="separation">
        <div className="d-flex">
          <div className="px-1">
            {profileImg.includes("http") ? (
              <img src={userData.value.profileImage} className="profileImage" alt="Profile" />
            ) : (
              <img src={profileDefaultImg} className="profileImage" alt="Profile" />
            )}
          </div>
          <div className="createTweetBox">
            <div className="form-group">
              <textarea
                onChange={(event) => {
                  setTweet(event.target.value);
                }}
                className="form-control "
                id="text"
                name="text"
                rows="5"
                maxLength="140"
                placeholder="What's happening?"
              ></textarea>
            </div>

            <div className="d-flex align-items-center justify-content-end">
              <p className="px-5 my-1 tweet-message">{tweetMessage}</p>
              <button
                onClick={() => {
                  storeTweet();
                  updateTweets();
                }}
                className="btn my-4 tweet-btn d-flex "
                type="button"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTweet;
