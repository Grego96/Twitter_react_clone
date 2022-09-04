import React, { useState, useEffect } from "react";
import axios from "axios";
import Tweets from "../Tweets";
import CreateTweet from "../CreateTweet";
import RightSidebar from "../RightSidebar/RightSidebar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import "./HomeStyles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [tweets, setTweets] = useState([]);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const token = useSelector((state) => state.token);

  async function getTweets() {
    try {
      const result = await axios({
        method: "get",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}`,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      setTweets(result.data.tweets);
      setUserData(result.data.user);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }

  function updateTweets() {
    getTweets();
  }

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <LeftSidebar />
        </div>
        <div className="col-md-5 px-0 parallelLines">
          <CreateTweet userData={userData} updateTweets={updateTweets} />
          <Tweets tweets={tweets} />
        </div>
        <div className="col-md-4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
