import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { categories: state.categories };
};

function MenuComponent(props) {
    return(
        <div>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li><a className="subheader">Readable</a></li>
                <li><div className="divider"></div></li>
                <li><a href="#!"><i className="material-icons teal-text">add_circle</i>Add Post</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Categories</a></li>
                {props.categories.map((category) => (
                    <li className={props.activeMenu === 'all' ? 'active':''}><a className="waves-effect" href="#!">All Posts</a></li>
                ))}
                
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
    );
}

const Menu = connect(mapStateToProps)(MenuComponent);
export default Menu;