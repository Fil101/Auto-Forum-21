import { Box } from '@mui/material';
import React from 'react';

export default function OneCommunity({ community }) {
  console.log(community);
  return (
    <div>
      <Box>
        <img src={community?.Car_model?.img} alt="text" />
      </Box>
    </div>
  );
}
