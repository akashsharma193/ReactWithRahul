import React, { Component } from 'react'
import Header from './component/Header.js'
import About from './component/About.js'
import Service from './component/Service.js'
import Home from './component/Home.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
        </switch>

      </div>
    </BrowserRouter>
  )
}




export default App;
