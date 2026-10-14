import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
//
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import HookDemo from './pages/HookDemo';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/hook-demo" component={HookDemo}/>
        </div>
       </BrowserRouter>
    );
  }
}

export default App;
