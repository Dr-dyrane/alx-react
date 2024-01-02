// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

// Elements
const body = $('body');
const countParagraph = $('<p id="count"></p>');
const button = $('<button>Click here to get started</button>');

// Append elements to the body
body.append('<p>Holberton Dashboard</p>');
body.append('<p>Dashboard data for the students</p>');
body.append(countParagraph);
body.append(button);
body.append('<p>Copyright - Holberton School</p>');

// Counter function
let count = 0;
const updateCounter = _.debounce(() => {
  count++;
  countParagraph.text(`${count} clicks on the button`);
}, 500);

// Click event on the button
button.on('click', updateCounter);
