import React from 'react'
import Header from './component/Header.js'
import About from './component/About.js'
import Service from './component/Service.js'
import Home from './component/Home.js'
import Footer from './component/Footer.js'
import Login from './component/login.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/login" component={Login} />
          </switch>
          <Footer />
        </div>
      </BrowserRouter >
    )
  }
}




export default App;
