import React from 'react';

function Post({ post }) {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <img src={post.image}></img>
        </div>
    );
}

export default Post;
