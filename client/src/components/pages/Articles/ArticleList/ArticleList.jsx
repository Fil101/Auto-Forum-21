import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, CardMedia, createTheme, Divider, Stack, ThemeProvider, Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import Article from '../Article';
import { fetchArticles } from '../../../../redux/actions/articlesActions';

function ArticleList() {
  const { modelId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  const articles = useSelector((state) => state.articles);
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Stack spacing={2} justifyContent="space-between" sx={{ borderRadius: "15px" }} divider={<Divider orientation="horizontal" flexItem />}>
          {console.log('\x1b[34m%s\x1b[0m', '32', articles)}
          <Item sx={{ borderRadius: "15px", width: '100%' }}>
            <Typography gutterBottom variant="h5" component="div">
              MODEL
            </Typography>
          </Item>
          {articles && articles?.map((el) => (
            <Item key={el.id} sx={{ borderRadius: "15px", margin: '10px' }}>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
              <Stack direction="row" spacing={2}>
                <CardMedia
                  sx={{ maxWidth: 345, maxHeight: 258, borderRadius: "15px" }}
                  component="img"
                  image={el.img}
                  alt={el.img}
                />
                <Item sx={{ borderRadius: "15px", width: '100%' }}>
                  {el.text}
                </Item>
              </Stack>
              <Item sx={{ borderRadius: "15px" }}>
                Дата публикации:
                {' '}
                {new Date(el.createdAt).toLocaleString()}
              </Item>
            </Item>
          ))}
          {/* <Article /> */}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default ArticleList;
