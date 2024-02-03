import React, { useState } from 'react';
import { TextField, PrimaryButton, Stack } from '@fluentui/react';
import { Caption1Strong } from '@fluentui/react-components'

function CreatePostForm({ onSubmit, onCancel }) {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [postImage, setPostImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setPostImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        // Ensure title, body, and image are provided before submitting


        if (postTitle && postBody && postImage) {
            onSubmit({ 
                title: postTitle, 
                body: postBody, 
                image: postImage 
            });
        }
    };

    return (
        <Stack tokens={{ childrenGap: 10 }}>
            <TextField
                label="Title"
                value={postTitle}
                onChange={(e, newValue) => setPostTitle(newValue)}
            />
            <TextField
                label="Description"
                multiline
                rows={4}
                value={postBody}
                onChange={(e, newValue) => setPostBody(newValue)}
            />
            <Caption1Strong>Image</Caption1Strong>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <Stack horizontal tokens={{ childrenGap: 10 }}>
                <PrimaryButton text="Submit" onClick={handleSubmit} />
                <PrimaryButton text="Cancel" onClick={onCancel} />
            </Stack>
        </Stack>
    );
}

export default CreatePostForm;
