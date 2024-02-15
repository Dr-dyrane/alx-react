import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchNotifications, markAsRead } from "../actions/notificationActionCreators";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { getUnreadNotifications } from "../selectors/notificationSelectors";

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <React.Fragment>
        {!displayDrawer ? (
          <div
            className={this.props.css.menuItem}
            onClick={handleDisplayDrawer}
          >
            <p>Your notifications</p>
          </div>
        ) : (
          <div className={this.props.css.Notifications}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {listNotifications.map((val) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={() => this.props.markNotificationAsRead(val.id)}
                  id={val.id}
                />
              ))}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func,
  css: PropTypes.object,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotifications(state), // Using selector to get unread notifications
});

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsRead, // Mapping markAsRead action creator
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
