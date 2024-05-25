import React from "react";
import "./css/Header.css";
import InboxIcon from "@mui/icons-material/Inbox";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import {Link} from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";


function Header(){
  const user = useSelector(selectUser);
  const history = useHistory()

    return(
        <header>
      <div className="header-container">
        <div className="header-left">
            <Link to ='/'>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCYkqUQJY1kDkOPqIq0KLxfYbDcIEkmY27R4eLW5IHejquxEmbhtUGvNbESMzNJFonsM&usqp=CAU"
              alt="logo"
            />
            </Link>
           
          <h3>CodeShare</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container"> 
           <span onClick={()=>{
           auth.signOut()
            history.push('/auth')
           }}><Avatar src={user ?.photo}/>
           </span>  
            <InboxIcon />
            <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
    )
}

export default Header;