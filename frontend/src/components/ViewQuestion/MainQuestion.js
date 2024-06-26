import { Avatar } from "@mui/material";
import React, { useState } from "react";
import {Bookmark, History} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./index.css";

function MainQuestion() {
  const [show, setShow] = useState(false);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question"></h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>Timestamp</p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43 times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>
                <p className="arrow">0</p>
                <p className="arrow">▼</p>
                <Bookmark />
                <History />
              </div>
            </div>
            <div className="question-answer">
              <p>This is Question Body</p>
              <div className="author">
                <small>asked "Timestamp"</small>
                <div className="auth-details">
                  <Avatar />
                  <p>Author Name</p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <p>
                    This is comment - <span>User name</span>
                    <small>Timestamp</small>
                  </p>
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button>Add comment</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
          <div className="all-question">
            <p>no. of answer</p>
            <div className="all-question-container">
              <div className="all-questions-left">
                <div className="all-options">
                  <p className="arrow">▲</p>
                  <p className="arrow">0</p>
                  <p className="arrow">▼</p>
                  <Bookmark />
                  <History />
                </div>
              </div>
              <div className="question-answer">
              <p>This is Question Body</p>
              <div className="author">
                <small>asked "Timestamp"</small>
                <div className="auth-details">
                  <Avatar />
                  <p>Author Name</p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <p>
                    This is comment - <span>User name</span>
                    <small>Timestamp</small>
                  </p>
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button>Add comment</button>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div> 
        </div>
        <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
              <button>Post Your Answer</button>
      </div>
  );
}

export default MainQuestion;
