import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@fluentui/react';
import CreatePostForm from '../components/CreatePostForm';
import { addPost } from '../dataService';

const stackTokens = { childrenGap: 10 };

const containerClass = {
    width: '60%',
    margin: '150px auto',
    padding: 20,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'lightgray',
};

function CreatePostPage() {
    const navigate = useNavigate();

    const handleSubmit = (newPost) => {
        // Include all post data when adding the post
        addPost({
            title: newPost.title,
            body: newPost.body,
            image: newPost.image,
        });

        // Redirect back to the home page after submitting the post
        navigate('/');
    };

    const handleCancel = () => {
        // Redirect back to the home page if the user cancels
        navigate('/');
    };

    return (
        <Stack className={containerClass} tokens={stackTokens}>
            <h2>Create a New Step</h2>
            <CreatePostForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </Stack>
    );
}

export default CreatePostPage;
