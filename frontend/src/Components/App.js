import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Menu from './Ui/Menu';
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
          <div>
            <Menu {...props} />
            <PostList />
          </div>
        )}/>

        <Route path="/categories/:category" render={(props) =>(
          <div>
            <Menu {...props} />
            <PostList {...props} />
          </div>
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

export default connect(mapStateToProps)(App);
