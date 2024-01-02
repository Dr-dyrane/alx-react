const $ = require('jquery');
const _ = require('lodash');
import '../css/main.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

function createButton() {
  const $button = $('<button>Click here to get started</button>').on(
    'click',
    _.debounce(updateCounter, 500, { leading: true, trailing: false })
  );
  return $button;
}

function createLogo() {
  return $('<div id="logo"></div>');
}

function appendElements() {
  $('body').append(createLogo());
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append(createButton());
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
}

// Call the function to append elements when the script runs
appendElements();
