var React = require('react');
// import React from 'react';
var ReactDOM = require('react-dom');

var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var Navi = require('./components/Navi');
// var Home = require('./components/Home');

import Home from './components/Home';

import Reg from './components/users/Reg';

var Post = require('./components/Post');

var App = React.createClass({
    render(){
        return (
            <div>
                <Navi/>
                 {this.props.children}
            </div>
        )
    }
});

// Render the main component into the dom
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path='(home)' component={Home}/>
            <Route path='post' components={Post}/>
            <Route path='reg' component={Reg}/>
        </Route>
    </Router>
), document.getElementById('app'));
