import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';

export default class Header extends Component {
    render() {
        return (
            <Router>
            <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Route path='/' component={Home} />
            <Route Path='/about' component={About} />

            </div>
            </Router>
        );
    }
}

