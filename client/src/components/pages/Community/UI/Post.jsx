import React from 'react';
import {
  Favorite, FavoriteBorder, MoreVert, Share,
} from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

function Post({ post }) {
  return (
    <Card sx={{ width: '60%', margin: '1%' }}>
      <CardHeader
        avatar={(
          <Avatar src={post?.User?.img} aria-label="recipe" />
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        )}
        title={post?.User?.name}
        subheader={new Date(post.updatedAt).toLocaleString()}
      />
      <CardMedia
        component="img"
        height="500vh"
        image={post.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
