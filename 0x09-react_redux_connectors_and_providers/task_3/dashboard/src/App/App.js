import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { AppContext, user, logOut } from "./AppContext";
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "../actions/uiActionCreators";

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.get("isUserLoggedIn"),
  displayDrawer: state.uiReducer.get("isNotificationDrawerVisible"),
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logOut,
  loginRequest,
};

const App = ({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, loginRequest }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/dashboard/dist/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      logOut();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <AppContext.Provider value={{ user, logOut }}>
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications
              listNotifications={[]} // No need to pass notifications data
              displayDrawer={displayDrawer}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}
            />
            <Header />
          </div>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={courses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={loginRequest} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
              ipsa iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
