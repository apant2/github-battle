var React = require("react");
var Popular = require("./Popular");

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {" "}
        //use className NOT class bc class is keyword in js
        <Popular />
      </div>
    );
  }
}

//export App component so we can require in the main module
module.exports = App;
