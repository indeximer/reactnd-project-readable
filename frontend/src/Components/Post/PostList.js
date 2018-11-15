import React, {Component} from 'react';
import Post from './Post';
import { connect } from "react-redux";
import {getPostsAsync, getPostsByCategoryAsync} from '../../Redux/Actions/post';

class ListPosts extends Component{

    componentDidMount(){
        const category = this.props.match ? this.props.match.params.category : false
        console.log(category)
        if(category){
           this.props.dispatch(getPostsByCategoryAsync(category))
        }else{
            this.props.dispatch(getPostsAsync());
        }
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
        console.log(store.postReducer)
    return {posts: store.postReducer.posts};
};
  
export default connect(mapStateToProps)(ListPosts);