import React, { useState } from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* LEFT SECTION */}
        <div className="header_left">
          <img src={NetflixLogo} alt="NetflixLogo" width="100" />

          {/* Desktop navigation */}
          <ul className="nav_links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li className="BbL">Browse by Language</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>

          {/* Hamburger icon for mobile */}
          <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`mobile_menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
