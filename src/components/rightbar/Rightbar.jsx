import { PeopleAlt } from '@mui/icons-material'
import React from 'react'
import './rightbar.css'
import { Users } from '../../dummydata'

const Rightbar = ({profile}) => {
  const HomeRightBar = () => {
    return (
      <>
       <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Jane Smith</b> and <b>3 other friends</b> have their birthday today.</span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <div className="rightbarTitle">
          <PeopleAlt className="icon"/>
          <h4>Online friends</h4>
        </div>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <li className="rightbarFriend" key={u.id} user={u}>
              <div className="rightbarProfileImgContainer">
                <img src={u.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{u.username}</span>
            </li>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
       <h4 className="rightbarTitle">User Information</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Accra</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Ghana</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City</span>
          <span className="rightbarInfoValue">Accra</span>
        </div>
       </div>
       <h4 className="rightbarTitle">Following</h4>
       <div className="rightbarInfo">
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Stiles Prince</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Stiles Prince</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Stiles Prince</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Stiles Prince</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Stiles Prince</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Stiles Prince</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Stiles Prince</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Stiles Prince</span>
          </div>
        </div>
       </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  )
}

export default Rightbar