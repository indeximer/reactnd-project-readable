import React, {Component} from 'react';
import Menu from '../Ui/Menu';
import PostLi from './PostLi';

class ListPosts extends Component{
    render(){
        return(
            <div>
                <Menu activeMenu="all" categories="" />

                <div className="container">
                    <div className="row">
                        <ul className="list-posts col s12">
                            <PostLi/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListPosts;