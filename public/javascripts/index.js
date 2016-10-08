'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var Navi = require('./components/Navi');

var App = React.createClass({
    render: function () {
        return (
            <div>
               <Navi />
            </div>
        )
    }
});
// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
