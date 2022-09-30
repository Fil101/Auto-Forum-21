import {
  Box, createTheme, Stack, ThemeProvider,
} from '@mui/material';
import React, { useState } from 'react';
import Add from './UI/Add';
import Feed from './UI/Feed';
import Rightbar from './UI/Rightbar';
import Sidebar from './UI/Sidebar';

function Community() {
  const [mode, setMode] = useState('dark');

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default Community;
