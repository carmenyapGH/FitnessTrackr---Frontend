import react from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  // color: "white",
  margin: "10px",
  fontSize: "20px",
  display: "inline-block",
  marginRight: "1em",
  textDecoration: "none",
};

const Navbar = ({ userdata, setToken, setUserdata }) => {
  return (
    <>
      <body className="navBody">
        <div className="nav">
          <label className="siteLogo"></label>
          <h1 className="nav-Title">Fitness Tracker</h1>

          <Link to="/" style={linkStyle}>
            HOME
          </Link>

          <Link to="/routines" style={linkStyle}>
            ROUTINES
          </Link>
          <Link to="/myroutines" style={linkStyle}>
            MY ROUTINES
          </Link>
          <Link to="/activities" style={linkStyle}>
            ACTIVITIES
          </Link>
          {!userdata && (
            <Link to="/register" style={linkStyle}>
              REGISTER
            </Link>
          )}
          {!userdata && (
            <Link to="/login" style={linkStyle}>
              LOGIN
            </Link>
          )}
          {userdata && (
            <Link className="addpost" to="/add" style={linkStyle}>
              ADD ROUTINES
            </Link>
          )}
          {userdata && (
            <Link
              to="/"
              style={linkStyle}
              onClick={() => {
                setToken("");
                setUserdata(null);
                localStorage.removeItem("token");
              }}
            >
              LOG OUT
            </Link>
          )}
        </div>
      </body>
    </>
  );
};

export default Navbar;
