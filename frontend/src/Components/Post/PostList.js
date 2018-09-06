import React, {Component} from 'react';
import PostLi from './PostLi';

class ListPosts extends Component{



    render(){
        return(
            <div className="container">
                <div className="row">
                    <ul className="list-posts col s12">
                        <PostLi/>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListPosts;