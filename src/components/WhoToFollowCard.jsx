import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function WhoToFollowCard({ randomUser }) {
  const token = useSelector((state) => state.token);
  const [ifFollow, setIfFollow] = useState(false);
  function toggleFollow() {
    setIfFollow(!ifFollow);
  }
  async function follow(id) {
    try {
      const result = await axios({
        method: "patch",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/users/${id}/follow`,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="d-flex profile-container">
      <div>
      <button
        className="follow-buton"
        onClick={() => {
          follow(randomUser._id);
          toggleFollow();
        }}
      >
        { ifFollow ? "Unfollow" : "Follow" }
      </button>
      </div>
      <div className="who-to-follow-img-container">
      <img className="img-who-to-follow" src={randomUser.profileImage} alt="" />
      </div>
      <Link className="profile-nick" to="#">
        {randomUser.username}
      </Link>
      <span className="profile-name">@{randomUser.username}</span>
    </div>
  );
}
