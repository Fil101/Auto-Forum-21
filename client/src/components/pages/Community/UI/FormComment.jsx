import { DateRange, Image } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Stack, styled, TextField, Typography, Avatar } from '@mui/material';

import React from 'react';
import { useSelector } from 'react-redux';

function FormComment(props) {
  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  });
  const user = useSelector((state) => state.auth);
  // console.log('это пользователь', user);
  return (
    <Box
      width={700}
      height={400}
      bgcolor="background.default"
      color="text.primary"
      p={3}
    >
      <Typography variant="h6" color="white" textAlign="center">
        Комментарии
      </Typography>
      <UserBox>
        <Avatar
          src={user?.img}
          sx={{ width: 30, height: 30 }}
        />
        <Typography fontWeight={500} variant="span">
          {user?.name}
        </Typography>
      </UserBox>
      <Box type="form">
        <TextField
          sx={{ width: '100%' }}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Text"
          variant="standard"
          name="text"
        />
        {/* я здесь */}
        <Button type="submit">Комментировать</Button>
      </Box>
    </Box>
  );
}

export default FormComment;
