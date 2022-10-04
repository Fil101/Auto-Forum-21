import {
  Box, createTheme, Stack, ThemeProvider,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Add from './UI/Add';
import Feed from './UI/Feed';
import Rightbar from './UI/Rightbar';
import Sidebar from './UI/Sidebar';
import { fetchPostsAsync } from '../../../redux/actions/postsActions';
import { fetchUsersAsync } from '../../../redux/actions/usersActions';

function Community() {
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  const { modelId } = useParams();
  const dispatch = useDispatch();
  const { posts, users } = useSelector((state) => state);
  console.log('это юзеры', users);
  // получаем все посты сообщества:
  useEffect(() => {
    dispatch(fetchPostsAsync(modelId));
  }, []);

  // получаем всех подписчиков сообщества:
  useEffect(() => {
    dispatch(fetchUsersAsync(modelId));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default Community;
