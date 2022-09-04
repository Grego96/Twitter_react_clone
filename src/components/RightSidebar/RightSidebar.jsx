import { Link } from "react-router-dom";
import "./RightSidebar.css";
import searchIcon from "./svg/searchIcon.svg";
import profileWhoToFollow from "./img/profileWhoToFollow.jpg";
import profileWhoToFollow2 from "./img/profileWhoToFollow2.jpg";
import profileWhoToFollow3 from "./img/profileWhoToFollow3.jpg";
import threeDots from "./svg/ThreeDots.svg";

export default function RightSidebar() {
  return (
    <div className="px-4">
      <div className="d-flex py-3 search-container">
        <img className="search-icon" src={searchIcon} alt="" />
        <input className="search-input" type="text" placeholder="           Buscar twitter" />
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
        <div className="d-flex profile-container">
          <img className="img-who-to-follow" src={profileWhoToFollow} alt="" />
          <Link className="profile-nick" to="#">
            profileNick
          </Link>
          <span className="profile-name">@profileName</span>
          <button className="follow-buton">Follow</button>
        </div>        
        <div className="d-flex profile-container">
          <img className="img-who-to-follow" src={profileWhoToFollow2} alt="" />
          <Link className="profile-nick" to="#">
            profileNick
          </Link>
          <span className="profile-name">@profileName</span>
          <button className="follow-buton">Follow</button>
        </div>
        <div className="d-flex profile-container">
          <img className="img-who-to-follow" src={profileWhoToFollow3} alt="" />
          <Link className="profile-nick" to="#">
            profileNick
          </Link>
          <span className="profile-name">@profileName</span>
          <button className="follow-buton">Follow</button>
        </div>
      </div>
    </div>
  );
}
