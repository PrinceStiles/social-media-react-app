import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import React from "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">PrinceStiles</span>
      </div>
      <div className="topbarCenter">
        <Search />
        <input placeholder="search for anything..." className="searchInput" />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
