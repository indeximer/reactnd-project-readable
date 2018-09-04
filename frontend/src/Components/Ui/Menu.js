import React from 'react';
import { connect } from "react-redux";

const Menu = (props) => {
    const {activeMenu, categories} = props;
    return(
        <div>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li><a className="subheader">Readable</a></li>
                <li><div className="divider"></div></li>
                <li><a href="#!"><i className="material-icons teal-text">add_circle</i>Add Post</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Categories</a></li>
                <li className={activeMenu === 'all' ? 'active':''}><a className="waves-effect" href='/'>All categories</a></li>
                {categories.map((category) => (
                    <li  key={category.path} className={activeMenu === category.path ? 'active':''}><a className="waves-effect" href={category.path}>{category.name}</a></li>
                ))}
                
            </ul>
            <a href="" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { categories: state.categoryReducer.categories };
};

export default connect(mapStateToProps)(Menu);