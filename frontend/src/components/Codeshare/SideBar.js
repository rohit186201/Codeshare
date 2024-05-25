import {Public, Stars, Work} from "@mui/icons-material";
import React from 'react'
import './css/Sidebar.css';
import {Link} from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-container">
            <div className="sidebar-options">
                <div className="sidebar-option">
                        <Link>Home</Link>
                </div>
                <div className="sidebar-option">
                    <Link>Public</Link>
                <div className="link">
                <div className="link-tag">
                    <Public />
                    <Link>Question</Link>
                </div>
                <div className="tags">
                    <p>Tags</p>
                    <p>Users</p>
                </div>
                </div>
            </div>
            <div className="sidebar-option">
                <p>Collective</p>
                <div className="link">
                <div className="link-tag">
                    <Stars />
                    <Link>Explore Collective</Link>
                </div>
                </div>
            </div>
            <div className="sidebar-option">
                <p>Find a Job</p>
            <div className="link">
                <div className="link-tag">
                    <Link>Question</Link>
                </div>
                
                </div>
            </div>
            <div className='sidebar-option'>
                <p>Teams</p>
                <div className="link-tag">
                    <Work />
                    <Link>Companies</Link>      
                </div>
                </div>          
        </div>
    </div>
    </div>
  )
}

export default SideBar