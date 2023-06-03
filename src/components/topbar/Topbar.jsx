import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <h2 className='logo'>PrinceStiles</h2>
        </div>    
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input placeholder='Search for friend, image, or videos...' className='searchInput'/>
            </div>  
        </div>  
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Home</span>    
                <span className="topbarLink">Timeline</span> 
            </div>
            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">5</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
        </div>    
    </div>
  )
}

export default Topbar