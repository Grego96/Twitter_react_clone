import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CreateTweetStyles.css";

function CreateTweet({ userData, updateTweets }) {
  const [tweet, setTweet] = useState("");
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

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
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userData);
  return (
    <>
      <h2 className="home">Home</h2>
      <div className="separation">
        <div className="d-flex">
          <div className="px-1">
            {/* {userData.profileImage.includes("http") ? (
            <img src={userData.profileImage} className="profileImage" alt="Profile" />
          ) : (
            <img src={`./img/${userData.profileImage}`} className="profileImage" alt="Profile" />
          )} */}

            <img src={userData.profileImage} className="profileImage" alt="Profile" />
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

            <div className="d-flex justify-content-end">
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
