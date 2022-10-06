import { Box, IconButton, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import Add from './Add';
import Post from './Post';
import Find from './Find';

function Feed() {
  const { posts } = useSelector((state) => state);
  const { modelId } = useParams();
  const [currModel, setCurrModel] = useState({}); // стейт хранит одну текущую модель
  console.log('это текущая модель ->>>>>>', currModel);
  // получаем текущую модель
  useEffect(() => {
    axios.get(`/api/models/model/${modelId}`)
      .then((res) => setCurrModel(res.data));
  }, [modelId]);

  // функция добавляет пост в избранное
  const addFavoritePost = async (postId) => {
    try {
      await axios.post(`/api/posts/favorite/${postId}`);
    } catch (e) {
      console.log(e);
    }
  };
  // функция добавляет лайк к посту
  const addLikePost = async (postId) => {
    try {
      await axios.post(`/api/posts/like/${postId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box
      flex={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={{ xs: 0, md: 2 }}
    >
      <ImageListItem
        sx={{ width: '100%', height: '25%' }}
      >
        <img
          src={currModel?.banner}
          srcSet={currModel?.banner}
          alt={currModel?.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={currModel?.Car_brand?.name}
          subtitle={currModel?.name}
          actionIcon={(
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${currModel?.name}`}
            >
              <InfoIcon />
            </IconButton>
            )}
        />
      </ImageListItem>
      <Find />
      <Add />
      {posts.length > 0
        ? posts.map((post) => (
          <Post key={post.id} post={post} addFavoritePost={addFavoritePost} addLikePost={addLikePost} />
        ))
        : (
          <>
            <Typography
              component="h3"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Нет постов
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Ваш всегда может быть первым, просто нажмите на кнопку "создать пост"
            </Typography>
          </>
        )}
    </Box>
  );
}

export default Feed;
