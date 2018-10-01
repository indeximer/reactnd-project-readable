import React, {Component} from 'react';
import Post from './Post';
import { connect } from "react-redux";
import {getPostsAsync} from '../../Redux/Actions/post';

class ListPosts extends Component{

    componentDidMount(){
        this.props.dispatch(getPostsAsync());
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <ul className="list-posts col s12">

                        {this.props.posts.map((post,key) => (
                            <Post key={key} {...post}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {posts: store.postReducer.posts};
};
  
export default connect(mapStateToProps)(ListPosts);