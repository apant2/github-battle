//Webpack is a module bundler-
//takes all the modules and intelligently combines them
//into one file we can reference in our index.html page

var path = require('path'); //require the path module
var HtmlWebpackPlugin = require('html-webpack-plugin'); //require HtmlWebpackPlugin
//lets us automatically generate an index.html file that has a reference to index_bundle.js

//export an object with all of our configurations ettings for webpack
module.exports = {
  entry: './app/index.js', //entry (aka root) of project
  output: { //create a new folder called dist with the index_bundle.js
            //that webpack has bundles together for us from the entry
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    //establish two rules
    rules: [
      {test: /\.(js)$/,use: ['babel-loader']}, //run the babel loader on any .js file in the application
      {test:/\.css$/,use: ['style-loader', 'css-loader']} //run the style-loader and css-loader on any .css file in the module
                            //css-loader takes any css being imported, i.e. url('../sample.css') and turn it into a require statement
                            //style-loader takes the css require statements and injects it into our index.html page
    ]
  },
  mode: 'development', //tell React which mode to build this application for
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html', //use app/index.html as template to create index.html in dist folder that has reference to index_bundle.js

    })
  ]
};


//Below is comments for package.json
//@babel/preset-env allows us to use class syntax (convert class syntax to old ES5 syntax)
//@babel/preset-react lets us transform jsx to pure js
//babel presets tells us which babel presets to rn to run
//using webpack-dev-server instead of webpack lets us do hot reloading of our app as changes are made
