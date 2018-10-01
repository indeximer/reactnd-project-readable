import React from 'react';

function Post(props){

    return(
        <li className="card hoverable row">
            <article className="card-content">
                <h1 className="card-title">{props.title}</h1>
            </article>
            <footer className="card-action col s12">
                <div className="post-vote-wrapper col s12 m6 px-0">
                    <button className="btn-floating waves-effect waves-light green hoverable"><i className="material-icons">thumb_up</i></button>
                    <button className="btn-floating waves-effect waves-light blue">{props.voteScore}</button>
                    <button className="btn-floating waves-effect waves-light red hoverable"><i className="material-icons">thumb_down</i></button>
                </div>

                <div className="text-right col s12 m6 px-0">
                    <button className="btn-floating waves-effect waves-light light-blue darken-4"><i className="material-icons">comment</i> <span className="comment-number">{props.commentCount}</span></button>
                    <button className="btn-floating waves-effect waves-light yellow darken-2 hoverable"><i className="material-icons">edit</i></button>
                    <button className="btn-floating waves-effect waves-light red hoverable"><i className="material-icons">delete</i></button>
                </div>
            </footer>
        </li>
    );
}

export default Post;