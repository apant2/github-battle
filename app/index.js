var React = require('react'); //require the React module
var ReactDOM = require('react-dom'); //Require the React DOM module
require('./index.css');
var App = require('./components/App');

ReactDOM.render(<App />,
document.getElementById('app'));
