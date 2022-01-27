// import React from 'react';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import Footer from './component/footer';
import Navbar from './component/navbar';
import Album from './page/album';
import Detail from './page/detailpage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Route path="/" component={Home} exact></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/album' component={Album}></Route>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;