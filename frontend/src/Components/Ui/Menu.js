import React, {Component} from 'react';

class Menu extends Component {
    state = {activeMenu : 'all'}

    render(){
        return(
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li><a className="subheader">Readable</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="#!"><i className="material-icons teal-text">add_circle</i>Add Post</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Categories</a></li>
                    <li className={this.state.activeMenu === 'all' ? 'active':''}><a className="waves-effect" href="#!">All Posts</a></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        );
    }


}

export default Menu;