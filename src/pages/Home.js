import React from 'react';
import Post from '../components/Post';
import { getPosts } from '../dataService';
import { Fabric, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Link as RouterLink } from 'react-router-dom';
import "../style.css";

function Home() {
  const posts = getPosts().reverse();

  return (
    <div className="HomePage">
        <div>
            <h1 className="ProjectName">Jurni</h1>
            <p className="ProjectDescription">Everyone has their own journey, what were the steps in yours?</p>
        </div>
      <Stack tokens={{ childrenGap: 10, padding: 20}}>
        <RouterLink to="/create">
          <DefaultButton className="createButton" text="Create a Step" />
        </RouterLink>
        <Stack.Item align="center"><h2 className="home-header">Your Steps:</h2></Stack.Item>
        {posts.map(post => <Stack.Item align="center"><Post key={post.id} post={post} /></Stack.Item> )}
      </Stack>
    </div>
  );
}

export default Home;
