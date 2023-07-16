import { Home, Inbox, Notifications, Person, Search, ViewTimeline } from '@mui/icons-material'
import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarContainer'>
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <img src="/assets/person/1.jpg" alt="logo"/>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <input placeholder='Search for friend, image, or videos...' className='searchInput'/>
                        <Search className='searchIcon'/>
                    </div>  
                </div>  
                <div className="topbarRight">
                    <div className="topbarLink">
                        <div className="topbarIconItem">
                            <Home titleAccess='Home'/> 
                        </div>
                        <div className="topbarIconItem">
                            <ViewTimeline titleAccess='Timeline'/>
                        </div>
                    </div>
                    <div className="topbarIcon">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Inbox />
                            <span className="topbarIconBadge">5</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img src="/assets/person/1.jpg" alt="" className="topbarImage" />
                </div>  
            </div>  
        </div>
    </div>
  )
}

export default Topbar