import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { connect } from "react-redux"; // Import connect from react-redux

function Footer({ user }) { // Receive user prop
  return (
    <>
      <div className="App-footer">
        {user.isLoggedIn && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

// Create mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.user, // Map user props to user within Redux state
});

export default connect(mapStateToProps)(Footer); // Connect Footer component to mapStateToProps
