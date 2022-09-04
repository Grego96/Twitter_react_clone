import axios from "axios";
import React, { useState } from "react";
import "./CreateTweetStyles.css";

function CreateTweet({ userData }) {
  const [tweet, setTweet] = useState("");
  // console.log(tweet);

  const storeTweet = async function () {
    await axios({
      method: "POST",
      basURL: `http://localhost:${process.env.REACT_APP_API_PORT}/tweets`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN_TEST}`,
      },
      data: { text: tweet },
    });
  };
  // console.log(userData);
  return (
    <>
      <h2 className="home">Inicio</h2>
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
                placeholder="Qué está pasando?"
              ></textarea>
            </div>

            <div className="d-flex justify-content-end">
              <button
                onClick={() => {
                  storeTweet();
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
