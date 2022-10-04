import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsAsync } from '../../../../redux/actions/commentsActions';
import CommentCard from './CommentCard';

function Comments({ post }) {
  const comments = useSelector(state => state.comments);
  console.log('это комментраии', comments);
  const dispatch = useDispatch();

  // получаем все комментарии к открытому посту
  useEffect(() => {
    dispatch(fetchCommentsAsync(post.id));
  }, []);

  return (
    <Box>
      {comments && comments.map((comment) => (
        <CommentCard comment={comment} />
      ))}
    </Box>
  );
}

export default Comments;