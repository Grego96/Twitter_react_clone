import React, { useState, useEffect } from "react";
import axios from "axios";
import Tweets from "../Tweets";
import CreateTweet from "../CreateTweet";
import RightSidebar from "../RightSidebar/RightSidebar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import "./HomeStyles.css";

export default function Home() {
  const [tweets, setTweets] = useState([]);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    async function getHome() {
      const result = await axios({
        method: "get",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}`,
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN_TEST}`,
        },
      });

      setTweets(result.data.tweets);
      setUserData(result.data.user);
      return result;
    }
    getHome();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <LeftSidebar />
        </div>
        <div className="col-md-5 px-0 parallelLines">
          <CreateTweet userData={userData} />
          <Tweets tweets={tweets} />
        </div>
        <div className="col-md-4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
