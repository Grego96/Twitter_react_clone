import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import RightSidebar from "../../RightSidebar/RightSidebar";
import backArrow from "./svg/arrow-left-solid.svg";
import Tweet from "../../Tweet";
import "./ProfileStyles.css";
import SelfTweetProfile from "../../SelfTweetsProfile";

function Profile() {
  const [user, setUser] = useState(null);
  // const [loggedUser, setLoggedUser] = useState({});
  // const [ifFollow, setIfFollow] = useState(false);
  const params = useParams();

  const token = useSelector((state) => state.token);

  useEffect(() => {
    const getProfile = async function () {
      try {
        const result = await axios({
          method: "GET",
          url: `http://localhost:${process.env.REACT_APP_API_PORT}/users/${params.id}`,
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        setUser(result.data);
        // setLoggedUser(result.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  // function toggleFollow() {
  //   setIfFollow(!ifFollow);
  // }

  return (
    user && (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <LeftSidebar />
          </div>

          {/* Profile zone */}
          <div className="col-md-5 px-0 parallelLines profileContainer">
            <div className="d-flex userProfile align-items-center mt-1">
              <Link to="/">
                <img className="backArrow mx-2" src={backArrow} alt="arrow to go home" />
              </Link>
              <div className="userNameTweets">
                <h4 className="m-0 userName">
                  <strong>{user.firstname + " " + user.lastname}</strong>
                </h4>
                <h6 className="usr">
                  {user.tweets.length}
                  Tweets{" "}
                </h6>
              </div>
            </div>

            <div className="profilePics">
              <div className="headerPic"></div>
              <div className="px-1 ">
                {user.profileImage.includes("http") ? (
                  <img src={user.profileImage} className="userProfileImage" alt="Profile" />
                ) : (
                  <img
                    src={`./img/${user.profileImage}`}
                    className="userProfileImage"
                    alt="Profile"
                  />
                )}

                {/* <img src={user.profileImage} className="userProfileImage" alt="Profile" /> */}

                <div>
                  {/* {loggedUser.data.user._id === user._id ? (
                  <button className=" edit-btn"> Edit profile</button>
                ) : (
                  <button
                    className="follow-buton"
                    onClick={() => {
                      // follow();
                      toggleFollow();
                    }}
                  >
                    {ifFollow ? "Unfollow" : "Follow"}
                  </button>
                )} */}

                  <button className=" edit-btn"> Edit profile</button>
                </div>
              </div>
            </div>

            <div className="userInfo px-2">
              <h4 className="profileUser m-0">
                <strong> {user.firstname + " " + user.lastname} </strong>
              </h4>
              <h6 className="usr"> @{user.username} </h6>
              <p className="my-2"> {user.description} </p>
              <h6 className="born"> Born 01 August 1962 | Joined September 1998</h6>
              <div>
                <h6>
                  <span className="usr">{user.followings.length} Followings</span>

                  <span className="followersSpan usr">{user.followers.length} Followers</span>
                </h6>
              </div>
            </div>
            <div>
              <ul className="d-flex justify-content-around p-0 m-0 selectionSection">
                <li className="profileList underline">
                  <span> Tweets</span>
                </li>
                <li className="profileList">Tweets & replies</li>
                <li className="profileList">Media</li>
                <li className="profileList">Likes</li>
              </ul>
            </div>
            {/* Profile zone ends */}

            {user.tweets.map((tweet) => {
              return <SelfTweetProfile tweet={tweet} selfUser={user} key={tweet._id} />;
            })}
          </div>
          <div className="col-md-4">
            <RightSidebar />
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
