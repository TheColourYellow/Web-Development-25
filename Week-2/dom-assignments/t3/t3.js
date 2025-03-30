'use strict';

const textPlace = document.getElementById('target');

const browserName = navigator.appCodeName;
const browserVersion = navigator.appVersion;
const osVersion = navigator.platform;
const screenWidth = screen.width;
const screenHeight = screen.height;
const widthAndHeight = `${screenWidth}x${screenHeight}`;
const widthLeft = screen.availWidth;
const heightLeft = screen.availHeight;
const widthAndHeightLeft = `${widthLeft} and ${heightLeft}`;

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const date = new Date().toLocaleDateString('fi-Fi', options);
const time = new Date().toTimeString();

function addToDocument(destination, title, content) {
  let funcTitleElement = document.createElement('h3');
  let funcTitleHtml = document.createTextNode(title);
  let funcElement = document.createElement('p');
  let funcHtml = document.createTextNode(content);
  funcTitleElement.appendChild(funcTitleHtml);
  destination.appendChild(funcTitleElement);
  funcElement.appendChild(funcHtml);
  destination.appendChild(funcElement);
}

addToDocument(textPlace, 'Browser Name', browserName);
addToDocument(textPlace, 'Version', browserVersion);
addToDocument(textPlace, 'OS Version', osVersion);
addToDocument(textPlace, 'Screen Resolution', widthAndHeight);
addToDocument(textPlace, 'Screen Space Left', widthAndHeightLeft);
addToDocument(textPlace, 'Current Date', date);
addToDocument(textPlace, 'Current Time', time);
