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

export default function RightSidebar() {
  const token = useSelector((state) => state.token);
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    async function getTweets() {
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
        console.log(result.data.randomsUnfollowers);
        setRandomUsers(result.data.randomsUnfollowers);
      } catch (error) {
        console.log(error);
      }
    }
    getTweets();
  }, []);

  return (
    <div className="px-4">
      <div className="d-flex py-3 search-container">
        <img className="search-icon" src={searchIcon} alt="" />
        <input className="search-input" disable type="text" placeholder="           Search Twitter" />
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
      </div>
      <div className="who-to-follow-container">
        <p className="who-to-follow">Who to follow</p>
        {randomUsers.map((randomUser) => {
          return (
            <div className="d-flex profile-container">
              <button className="follow-buton">Follow</button>
              <img className="img-who-to-follow" src={randomUser.profileImage} alt="" />
              <Link className="profile-nick" to="#">
                {randomUser.username}
              </Link>
              <span className="profile-name">@{randomUser.username }</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}








//llamada con patch a user/:id/follower


//en el map ponerle una funcion con user.id.