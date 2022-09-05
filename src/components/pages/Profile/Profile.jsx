import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import RightSidebar from "../../RightSidebar/RightSidebar";
import backArrow from "./svg/arrow-left-solid.svg";
import Tweet from "../../Tweet";
import "./ProfileStyles.css";

function Profile() {
  const [user, setUser] = useState({});
  const params = useParams();

  const token = useSelector((state) => state.token);

  useEffect(() => {
    const getProfile = async function () {
      try {
        const result = await axios({
          method: "GET",
          baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/users/${params.id}`,
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        setUser(result.data.userProfileData);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <LeftSidebar />
        </div>

        {/* Profile zone */}
        <div className="col-md-5 px-0 parallelLines profileContainer">
          <div className="d-flex userProfile align-items-center">
            <Link to="/">
              <img className="backArrow mx-2" src={backArrow} alt="arrow to go home" />
            </Link>
            <div className="mb-2">
              <h4>{user.firstname + " " + user.lastname} </h4>
              <h6 className="usr"> 
              {/* {user.tweets.length} */}
               Tweets </h6>
            </div>
          </div>

          <div>
            <div className="headerPic"></div>
            <div className="px-1">
              {/* {user.profileImage.includes("http") ? (
            <img src={user.profileImage} className="userProfileImage" alt="Profile" />
          ) : (
            <img src={`./img/${user.profileImage}`} className="userProfileImage" alt="Profile" />
          )} */}

              <img src={user.profileImage} className="userProfileImage" alt="Profile" />
            </div>

            <div>
              <button className=" edit-btn"> Edit profile</button>
            </div>
          </div>

          <div className="userInfo px-2">
            <h4 className="profileUser">
              <strong> {user.firstname + " " + user.lastname} </strong>
            </h4>
            <h6 className="usr"> @ {user.username} </h6>
            <p className="my-4"> {user.description} </p>
            <h6 className="born"> Born 01 August 1962 | Joined September 1998</h6>
            <div>
              <h6>
                <span>
                  {/* {user.followings.length} */}
                  <text className="usr"> Followings </text>
                </span>

                <span className="followersSpan">
                  {/* {user.followers.length} */}
                  <text className="usr"> Followers </text>
                </span>
              </h6>
            </div>
          </div>
          <div>
            <ul className="d-flex justify-content-around p-0 m-0">
              <li className="profileList underline">
                <span> Tweets</span>
              </li>
              <li className="profileList">Tweets & replies</li>
              <li className="profileList">Media</li>
              <li className="profileList">Likes</li>
            </ul>
          </div>
          {/* Profile zone ends */}

          {/* {user.tweets.map((tweet) => {
            return <Tweet tweet={tweet} key={tweet.id} />;
          })} */}
        </div>
        <div className="col-md-4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Profile;
