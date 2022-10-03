import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import ReactPaginate from 'react-paginate';
import BrandItem from './BrandItem';

function Brands() {
  const brands = useSelector((state) => state.brands);

  const [pageNumber, setPageNumber] = useState(0);

  const brandsPage = 16;

  const pagesVisited = pageNumber * brandsPage;

  const displayBrands = brands
    .slice(pagesVisited, pagesVisited + brandsPage).map((el) => (
      <BrandItem key={el.id} brand={el} />
    ));

  const pageCount = Math.ceil(brands.length / brandsPage);

  const changeBrands = ({ selected }) => {
    console.log('++++');
    setPageNumber(selected);
  };

  return (
    <div className="asd">
      <div className="box">
        {displayBrands}
        <ReactPaginate
          marginPagesDisplayed={2}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          previousLabel={"<--"}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          nextLabel={"-->"}
          pageCount={pageCount}
          onPageChange={changeBrands}
          containerClassName="paginationBttns"
          previousLinkClassName="previosBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
          pageLinkClassName="count"
        />
      </div>
    </div>
  );
}

export default Brands;

/* {brands && brands?.map((el, i) => (
  <BrandItem key={el.id} brand={el} />
))} */

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
