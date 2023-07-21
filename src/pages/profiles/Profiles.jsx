import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import './profiles.css'

const Profiles = () => {
  return (
    <div className='profile'>
      <Topbar />
      <div className="profiles">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post/7.jpeg" alt="" className="profileCoverImg" />
              <img src="assets/person/1.jpg" alt="" className="profileUserImg" />
              <div className="profileInfo">
                <h4 className="profileInfoName">Stiles</h4>
                <span className="profileInfoDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit!</span>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Profiles