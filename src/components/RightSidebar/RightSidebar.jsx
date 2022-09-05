import { Link } from "react-router-dom";
import "./RightSidebar.css";
import searchIcon from "./svg/searchIcon.svg";
import profileWhoToFollow from "./img/profileWhoToFollow.jpg";
import profileWhoToFollow2 from "./img/profileWhoToFollow2.jpg";
import profileWhoToFollow3 from "./img/profileWhoToFollow3.jpg";
import threeDots from "./svg/ThreeDots.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import WhoToFollowCard from "../WhoToFollowCard";

export default function RightSidebar() {
  const token = useSelector((state) => state.token);
  const [randomUsers, setRandomUsers] = useState([]);

  async function randomsUnfollowers() {
    try {
      const result = await axios({
        method: "get",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/users/randomUnfollowers`,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        params: {
          number: 5,
        },
      });
      setRandomUsers(result.data.randomsUnfollowers);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    randomsUnfollowers();
  }, []);


  return (
    <div className="general-container">
      <div className="d-flex py-3 search-container">
        <img className="search-icon" src={searchIcon} alt="" />
        <input className="search-input" disabled type="text" placeholder="           Search Twitter" />
      </div>
      <div className="trends-container">
        <p className="trends-for-you">Trends for you</p>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Ghotico</p>
          <p className="trending-profile-tweets">2985 Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Alina Gabriels</p>
          <p className="trending-profile-tweets">15605 Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Magie</p>
          <p className="trending-profile-tweets">5632 Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Diosa</p>
          <p className="trending-profile-tweets">9977 Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Igor Carcarof</p>
          <p className="trending-profile-tweets">35900 Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Eliana Mauregui</p>
          <p className="trending-profile-tweets">6300 Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Carmen Barbieri</p>
          <p className="trending-profile-tweets">3950 Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Igor Carcarof</p>
          <p className="trending-profile-tweets">11k Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Esteban Cassiani</p>
          <p className="trending-profile-tweets">21.9 Tweets</p>
        </div>
        <div className="trends-for-you-list">
          <img className="three-dots-trends" src={threeDots} alt="" />
          <p className="trending-in">Trending in Uruguay</p>
          <p className="trending-profile-name">Alice Keys</p>
          <p className="trending-profile-tweets">35.8kTweets</p>
        </div>
          <div className="show-more-trends-container">
          <Link to="#" className="show-more-trends">Show more</Link>
          </div>
      </div>
      <div className="who-to-follow-container">
        <p className="who-to-follow">Who to follow</p>
        {randomUsers.map((randomUser) => {
          return (
            <WhoToFollowCard randomUser={randomUser}/>
            
          );
        })}
         <div className="show-more-trends-container">
          <Link to="#" className="show-more-trends">Show more</Link>
          </div>
      </div>
    </div>
  );
}








//llamada con patch a user/:id/follower


//en el map ponerle una funcion con user.id.