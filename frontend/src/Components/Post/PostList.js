import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import Main from '../Main'
import {getPostsAsync, getPostsByCategoryAsync} from '../../Redux/Actions/post'

class ListPosts extends Component{

    componentDidMount(){
        this.props.dispatch(getPostsAsync())
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.category !== nextProps.match.params.category) {
            this.props.dispatch(getPostsByCategoryAsync(nextProps.match.params.category))
        }
    }

    render(){
        const category = this.props.match.params.category || 'all'
        const posts = this.props.posts
        console.log(category)

        return(
            <Main activeMenu={category}>
                <div className="container">
                    <div className="row">
                        <ul className="list-posts col s12">
                            {posts.map((post,key) => (
                                <Post key={key} {...post}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </Main>
        )
    }
}


const mapStateToProps = (store) => {
        console.log(store.postReducer)
    return {posts: store.postReducer.posts}
}
  
export default connect(mapStateToProps)(ListPosts)