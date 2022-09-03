import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Tweets from "../Tweets";

export default function Home() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    async function getHome() {
      const result = await axios({
        method: "get",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}`,
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN_TEST}`,
        },
      });
      // console.log(result);
      setTweets(result.data.tweets);
      return result;
    }
    getHome();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Tweets tweets={tweets} />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
