import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import Comment from '../components/Comment';
import { fetchPosts } from '../api';

function UserProfile({ match }) {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const userId = match.params.id;

        // Fetch user details from the mock API
        // ... (unchanged code)

        // Fetch posts from the mock API
        const fetchUserPosts = async () => {
            try {
                const userPosts = await fetchPosts();
                setPosts(userPosts);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        fetchUserPosts();

    }, [match.params.id]);

    const handleSubmit = async (newPost) => {
        try {
            // Create a new post on the server
            const createdPost = await createPost(newPost);

            // Fetch the updated list of posts after creating a new post
            const updatedPosts = await fetchPosts();
            setPosts(updatedPosts);
        } catch (error) {
            console.error('Error creating or fetching user posts:', error);
        }
    };

    return (
        <div>
            <h2>{user.name}'s Profile</h2>
            <CreatePost onPostSubmit={handleSubmit} />
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
