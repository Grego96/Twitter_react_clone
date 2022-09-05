import React from "react";
import { Link } from "react-router-dom";
import birdhouse from "./svg/birdhouse.svg";
import hashtag from "./svg/hashtag.svg";
import bell from "./svg/bell.svg";
import message from "./svg/mail-message.svg";
import profile from "./svg/profile.svg";
import threePoints from "./svg/threePoints.svg";
import twitter_logo from "./svg/twitter_logo.svg";
import bookmarks from "./svg/bookmarks_icon.svg";
import listIcon from "./svg/listIicon.svg";
import { useSelector } from "react-redux";
import "./left-sidebar.css";


export default function LeftSidebar() {
  const user = useSelector((state) => state.user)

  return (
    <div className="sidebar-container">
      <Link to="/">
        <img className="twitter-icon" src={twitter_logo} alt="" />
      </Link>
      <Link to="/" className="home-sidebar">
        <div>
        <span >
          <div>
          <img className="birdhouse" src={birdhouse} alt="" /><sup className="birdhouse-dot">·</sup>Home</div>          
        </span>
        </div>
      </Link>
      <Link to="#" className="explore">
        <span className="explore-icon">          
          <img className="explore-icon" src={hashtag} alt="" />
          Explore
        </span>
      </Link>
      <Link to="#" className="sidebar-left-links-notification">
        <span ><div className="">
          <img className="bell" src={bell} alt="" /><sup className="notifications-count">5</sup>Notifications
          </div>      
        </span>
      </Link>
      <Link to="#"  className="messages">
        <span  className=" sidebar-left-links">
          <img className="messages-icon" src={message} alt="" />
          Messages
        </span>
      </Link>
      <Link to="#" className=" bookmarks">
        <span className="sidebar-left-links">
        <img className="bookmarks-icon" src={bookmarks} alt="" />
        Bookmarks
        </span>
      </Link>
      <Link to="#" className="list">
        <span className="sidebar-left-links">
        <img className="list-icon" src={listIcon} alt="" />
        Lists
        </span>
      </Link>
      <Link to={`/users/${user.value._id}`} className="profile">
        <span className="sidebar-left-links">
        <img className="profile-icon" src={profile} alt="" />
        Profile
        </span>
      </Link>
      <Link to="#" className="more">
        <span className="sidebar-left-links">
        <img className="more-icon" src={threePoints} alt="" />
        More
        </span>
      </Link>
      <button className="btn-tweet">Tweet</button>
    </div>
  );
}
