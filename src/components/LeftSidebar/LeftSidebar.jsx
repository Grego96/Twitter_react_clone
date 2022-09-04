import React from "react";
import { Link } from "react-router-dom";
import "./left-sidebar.css";
import birdhouse from "./svg/birdhouse.svg";
import hashtag from "./svg/hashtag.svg";
import bell from "./svg/bell.svg";
import message from "./svg/mail-message.svg";
import profile from "./svg/profile.svg";
import threePoints from "./svg/threePoints.svg";
import twitter_logo from "./svg/twitter_logo.svg";
import bookmarks from "./svg/bookmarks_icon.svg";
import listIcon from "./svg/listIicon.svg";
export default function LeftSidebar() {
  return (
    
      <div className="sidebar-container">
        <img className="twitter-icon" src={twitter_logo} alt="" />
        <Link to="/" className="sidebar-left-links home-sidebar">
          <img className="birdhouse" src={birdhouse} alt="" />
          Home
        </Link>
        <Link to="#" className="sidebar-left-links">
          <img className="birdhouse" src={hashtag} alt="" />
          Explore
        </Link>
        <Link to="#" className="sidebar-left-links">
          <img className="bell" src={bell} alt="" />
          Notifications
        </Link>
        <Link to="#" className="sidebar-left-links-notification sidebar-left-links">
          <img className="bell" src={message} alt="" />
          Notifications
        </Link>
        <Link to="#" className="sidebar-left-links">
          <img className="bell" src={bookmarks} alt="" />
          Bookmarks
        </Link>
        <Link to="#" className="sidebar-left-links">
          <img className="bell" src={listIcon} alt="" />
          Lists
        </Link>
        <Link to="#" className="sidebar-left-links">
          <img className="bell" src={profile} alt="" />
          Profile
        </Link>
        <Link to="#" className="sidebar-left-links">
          <img className="bell" src={threePoints} alt="" />
          More
        </Link>
        <button className="btn-tweet">Tweet</button>
      </div>
    
  );
}
