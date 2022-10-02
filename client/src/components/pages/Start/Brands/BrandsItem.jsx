import { CardMedia, Grid } from '@mui/material';
import React from 'react';

function BrandItem({ brand }) {
  return (
    <div className="logoBrand">
      <img
        src={brand.logo}
        alt=""
        style={{ width: '120px', height: '80px' }}
      />
    </div>
  );
}

export default BrandItem;

/* <CardMedia sx={{ height: '60px', width: '90px' }}></CardMedia> */
