import React from 'react';

function Comment({ comment }) {
    return (
        <div className="comment">
            <p>{comment.body}</p>
        </div>
    );
}

export default Comment;
