import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Box from '@mui/joy/Box';

function Brands() {
  const brands = useSelector((state) => state.brands);
  console.log('===>', brands);
  return (
    <Box sx={{ minHeight: 350 }}>
      {brands && brands?.map((el) => (
        <Card sx={{ height: '60px', width: '90px' }}>
          <CardCover>
            <img
              src={el.logo}
              alt=""
            />
          </CardCover>
        </Card>
      ))}
    </Box>

  );
}

export default Brands;

{ /* <ImageList sx={{ width: 250, height: 250 }} cols={4} rowHeight={4}>
{brands && brands?.map((el) => (
  <ImageListItem key={el.logo}>
    <img
      src={`${el.logo}?w=164&h=164&fit=crop&auto=format`}
      alt={el.name}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList> */ }
