import { DateRange, Image } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material';

import React from 'react';

function FormComment(props) {
  return (
    <Box
      type="form"
      sx={{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6" color="gray" textAlign="center">
        Add Commit
      </Typography>
      <TextField
        sx={{ width: '100%' }}
        id="standard-multiline-static"
        multiline
        rows={3}
        placeholder="Title"
        variant="standard"
        name="title"
      />
      <Button type="submit">Commit</Button>
    </Box>
  );
}

export default FormComment;
