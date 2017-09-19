const greeting = require('./greeting');
const ReactDOM = require('react-dom');

// Wait for the window to load
window.onload = function () {
  const App = document.querySelector('#todo-app');

  ReactDOM.render(
    greeting,
    App
  );
}
