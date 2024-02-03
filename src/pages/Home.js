import React from 'react';
import Post from '../components/Post';
import { getPosts } from '../dataService';
import { Fabric, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  const posts = getPosts().reverse();

  return (
    <Fabric>
      <Stack tokens={{ childrenGap: 20, padding: 20 }}>
        <h2 className="home-header">Home Page</h2>
        <RouterLink to="/create">
          <DefaultButton text="Create a Post" />
        </RouterLink>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </Stack>
    </Fabric>
  );
}

export default Home;
