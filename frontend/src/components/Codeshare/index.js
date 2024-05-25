import React from 'react'
import './css/Index.css';
import SideBar from './SideBar'
import Main from './Main'

function index() {
  return (
    <div className="stack-index">
        <div className="stack-index-content">
            <SideBar />
            <Main />
        </div>
    </div>
  )
}

export default index