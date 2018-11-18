import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class Menu extends Component {

    render(){
        const {categories, activeMenu} = this.props;

        return(
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li><a className="subheader">Readable</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="#!"><i className="material-icons teal-text">add_circle</i>Add Post</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Categories</a></li>
                    <li className={activeMenu === 'all' ? 'active':''}><Link className="waves-effect" to='/'>All posts</Link></li>
                    {categories.map((category) => (
                        <li  key={category.path} className={activeMenu === category.path ? 'active':''}>
                            <Link className="waves-effect" to={`/categories/${category.path}`}>{category.name}</Link>
                        </li>
                    ))}
                    
                </ul>
                <a href="" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        );
    }
    
}

const mapStateToProps = (store) => {
    return { categories: store.categoryReducer.categories };
};

export default connect(mapStateToProps)(Menu);