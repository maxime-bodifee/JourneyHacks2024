import React from 'react';

function Post({ post }) {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <img src={post.image}></img>
            <div className="post-details">
                <p>
                    <strong>Author:</strong> {post.author} {/* Include the author's name or username */}
                </p>
                <p>
                    <strong>Date:</strong> {new Date(post.date).toLocaleDateString()} {/* Include the post date */}
                </p>
                {/* Add any other relevant details here */}
            </div>
        </div>
    );
}

export default Post;
