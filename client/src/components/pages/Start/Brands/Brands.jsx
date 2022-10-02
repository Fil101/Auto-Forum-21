import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import BrandItem from './BrandsItem';

function Brands() {
  const brands = useSelector((state) => state.brands);
  return (
    <div className="box">
      {brands && brands?.map((el) => (
        <BrandItem key={el.id} brand={el} />
      ))}
    </div>
  );
}

export default Brands;

/* <ImageList sx={{ width: 250, height: 250 }} cols={4} rowHeight={4}>
{brands && brands?.map((el) => (
  <ImageListItem key={el.logo}>
    <img
      src={`${el.logo}?w=164&h=164&fit=crop&auto=format`}
      alt={el.name}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList> */

// <Box sx={{ minHeight: 350 }}>
//   {brands && brands?.map((el) => (
//     <Card sx={{ height: '60px', width: '90px' }}>
//       <CardCover>
//         <img
//           src={el.logo}
//           alt=""
//         />
//       </CardCover>
//     </Card>
//   ))}
// </Box>;

// container
// spacing={2}
// sx={{ backgroundColor: 'black', width: '450px', height: '320px' }}
