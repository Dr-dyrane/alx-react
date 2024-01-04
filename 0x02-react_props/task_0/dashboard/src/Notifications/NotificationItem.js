// NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

function NotificationItem({ type, html, value }) {
  return (
    <li data-priority={type} className={type}>
      {value}
      {html && <div dangerouslySetInnerHTML={html} />}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
