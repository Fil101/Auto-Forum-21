import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BrandItem({ brand }) {
  return (
    <Link to={`/brands/${brand.id}`}>
      <div className="logoBrand">
        <img
          src={brand.logo}
          alt=""
          style={{ width: '85%', height: '85%' }}
        />
      </div>
    </Link>
  );
}

export default BrandItem;

/* <CardMedia sx={{ height: '60px', width: '90px' }}></CardMedia> */

/* <button onClick={() => navigate(`/brands/${brand.id}`)} /> */
