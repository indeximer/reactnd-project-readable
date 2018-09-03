import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import PostList from './Post/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() =>(
            <PostList/>
        )}/>

        <Route path="/categories/:category" render={() =>(
          <div></div>
        )}/>

        <Route path="/post" render={() =>(
          <div></div>
        )}/>
      </div>
    );
  }
}

export default App;
