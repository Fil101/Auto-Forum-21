import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import ForumIcon from '@mui/icons-material/Forum';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Fab,
  formControlLabelClasses,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Favorite,
  FavoriteBorder,
  Image,
  MoreVert,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { addPostAsync } from '../../../../redux/actions/postsActions';
import FormComment from './FormComment';

const SytledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

function ShowPost({ post }) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(null);
  const [inputs, setInputs] = useState({ text: '' });
  console.log(inputs);

  const { modelId } = useParams();
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Badge badgeContent={4} color="primary">
        <IconButton
          onClick={(e) => setOpen(true)}
          aria-label="comments"
        >
          <ForumIcon color="action" />
        </IconButton>
      </Badge>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{ width: '35%', margin: '1%' }}>
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
            subheader={new Date(post?.updatedAt).toLocaleString()}
          />
          <CardMedia
            component="img"
            height="500vh"
            image={`http://localhost:3001/${post.img}`}
            alt="Post Photo"
          />
          <CardContent>
            <Typography variant="h4" color="text.secondary">
              {post?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post?.text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: 'red' }} />}
              />
            </IconButton>
          </CardActions>
          <FormComment />
        </Card>
      </SytledModal>
    </>
  );
}

export default ShowPost;
