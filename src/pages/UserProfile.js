import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post';
import Comment from '../components/Comment';

function UserProfile({ match }) {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const userId = match.params.id;

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching user posts:', error));

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching user comments:', error));
    }, [match.params.id]);

    return (
        <div>
            <h2>{user.name}'s Profile</h2>
            <div>
                <h3>Posts</h3>
                {posts.map(post => <Post key={post.id} post={post} />)}
            </div>
            <div>
                <h3>Comments</h3>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </div>
        </div>
    );
}

export default UserProfile;
