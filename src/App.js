import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Common/Footer';
import Navigation from './components/Common/Navigation';
import { Nav } from 'mdbreact';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Footer />
      </div>
    );
  }
}

export default App;
