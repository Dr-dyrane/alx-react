import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux"; // Import connect from react-redux
import { logOut } from "../actions/uiActionCreators"; // Import logOut action creator

function Header({ user, logOut }) { // Receive user prop and logOut action creator
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },

  greeting: {
    marginTop: "1rem",
  },
});

// Create mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.user, // Map user props to user within Redux state
});

// Connect Header component to mapStateToProps and logOut action creator
export default connect(mapStateToProps, { logOut })(Header);
