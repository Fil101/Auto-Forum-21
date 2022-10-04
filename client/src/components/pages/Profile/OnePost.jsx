import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function OnePost({ post, isFavorite }) {
  const deleteHandler = (e) => {
    // axios
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <Card
        sx={{
          width: 400,
          heigth: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 1,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={post?.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post?.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        {isFavorite
        && (
        <CardActions>
          <Button
            component={NavLink}
            size="small"
            color="primary"
            onClick={deleteHandler}
          >
            Удалить
          </Button>
        </CardActions>
        )}
      </Card>
    </Box>
  );
}
