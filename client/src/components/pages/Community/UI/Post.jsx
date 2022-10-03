import React from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ForumIcon from '@mui/icons-material/Forum';
import {
  Favorite, FavoriteBorder, MoreVert,
} from '@mui/icons-material';
import {
  Avatar,
  Badge,
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
          <Avatar src={post.User.img} aria-label="recipe" />
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        )}
        title={post.User.name}
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
        <IconButton aria-label="favorite">
          <BookmarkAddIcon />
        </IconButton>
        <Badge badgeContent={4} color="primary">
          <IconButton aria-label="comments">
            <ForumIcon color="action" />
          </IconButton>
        </Badge>
      </CardActions>
    </Card>
  );
}

export default Post;
