// alx-react/0x00-Webpack/task_2/js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

$('#count').on('click', _.debounce(updateCounter, 500));

const addButton = () => {
  const button = $('<button>').text('Click here to get started');
  $('body').append(button);
};

const addParagraphs = () => {
  const paragraphs = [
    'Holberton Dashboard',
    'Dashboard data for the students',
    'Copyright - Holberton School',
  ];

  paragraphs.forEach((text) => {
    const paragraph = $('<p>').text(text);
    $('body').append(paragraph);
  });
};

addParagraphs();
addButton();
