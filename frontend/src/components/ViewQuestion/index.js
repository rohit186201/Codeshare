import React from 'react'
import '../Codeshare/css/Index.css';
import SideBar from '../Codeshare/SideBar'
import MainQuestion from './MainQuestion'


function index() {
  return (
    <div className="stack-index">
        <div className="stack-index-content">
            <SideBar />
            <MainQuestion />
        </div>
    </div>
  )
}

export default index