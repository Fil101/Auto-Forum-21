import { Box, Stack, Skeleton } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Add from './Add';
import Post from './Post';

function Feed() {
  const { posts } = useSelector((state) => state);

  return (
    <Box
      flex={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={{ xs: 0, md: 2 }}
    >
      <Add />
      {posts && posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
}

export default Feed;
