import React from 'react';
import { Avatar } from '@mui/material';
import './css/AllQuestion.css';
import { Link } from 'react-router-dom';

function AllQuestion() {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <small>0 Views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to='/question'>How do you drag and drop in ant design?</Link>
          <div style={{ width: '90%' }}>
            <div>What I want to know is an example about how to make the drag and drop of my table that works properly, but I cannot figure out how to make it work</div>
          </div>
          <div style={{ display: 'flex' }}>
            <span className="question-tags">react</span>
            <span className="question-tags">antd</span>
            <span className="question-tags">frontend</span>
          </div>
          <div className="author">
            <small>Timestamp</small>
            <div className='author-details'>
              <Avatar />
              <p>User Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestion;
