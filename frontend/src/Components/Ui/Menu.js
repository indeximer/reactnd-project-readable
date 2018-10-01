import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class Menu extends Component {
    state = {
        activeMenu:''
    }

    componentDidMount(){
        const active =this.props.match.params.category || 'all';
        this.updateActiveMenu(active);
        
    }

    updateActiveMenu = (active = 'all') => {
        this.setState({activeMenu: active});
    }

    render(){
        const {categories} = this.props;
        const activeMenu = this.state.activeMenu;

        return(
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li><a className="subheader">Readable</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="#!"><i className="material-icons teal-text">add_circle</i>Add Post</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Categories</a></li>
                    <li className={activeMenu === 'all' ? 'active':''}><Link onClick={() => this.updateActiveMenu('all')} className="waves-effect" to='/'>All posts</Link></li>
                    {categories.map((category) => (
                        <li  key={category.path} className={activeMenu === category.path ? 'active':''}><Link onClick={() => this.updateActiveMenu(category.path)} className="waves-effect" to={`/categories/${category.path}`}>{category.name}</Link></li>
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