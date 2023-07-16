import { PeopleAlt } from '@mui/icons-material'
import React from 'react'
import './rightbar.css'
import { Users } from '../../dummydata'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
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
      </div>
    </div>
  )
}

export default Rightbar