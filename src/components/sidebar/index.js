import React from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
// import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D"
        className="profile-img"
        alt="profile"
      />
      <div>
        <SidebarButton title="Search" to="/search" icon={<FaSearch />}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/library" icon={<MdLibraryMusic/>}/>

      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignInAlt/>}/>
    </div>
  );
}
