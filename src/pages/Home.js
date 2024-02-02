import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h2>Home Page</h2>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
}

export default Home;
