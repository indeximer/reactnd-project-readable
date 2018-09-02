import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Menu from './Ui/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() =>(
          <Menu activeMenu="all" categories="" />
        )}/>

        <Route path="/category" render={() =>(
          <Menu activeMenu="all" categories="" />
        )}/>

        <Route path="/post" render={() =>(
          <Menu activeMenu="all" categories="" />
        )}/>
      </div>
    );
  }
}

export default App;
