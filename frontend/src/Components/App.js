import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import PostList from './Post/PostList';
import { connect } from "react-redux";
import {getCategoriesAsync} from '../Redux/Actions/category';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(getCategoriesAsync());
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) =>(
            <PostList {...props} />
        )}/>

        <Route exact path="/categories/:category" render={(props) =>(
            <PostList {...props} />
        )}/>

        <Route path="/post" render={() =>(
          <div></div>
        )}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {categories: store.categoryReducer.categories};
};

export default withRouter(connect(mapStateToProps)(App))
