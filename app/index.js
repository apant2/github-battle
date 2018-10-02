var React = require('react'); //require the React module
var ReactDOM = require('react-dom'); //Require the React DOM module
require('./index.css');

//React Component has 3 things:
//1) state
//2) lifecycle events- React allosw you to hook into specific lifecycle events
//3) UI- Component needs this for certain!


//How to define a component
class App extends React.Component{
	//render describes how the UI should look like
	render(){
		<div>
			Hello World!
		</div>
	}
}

//How to use a Component (i.e. actually display the component)
ReactDOM.render(<App />,
document.getElementById('app'))
