import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ModelItem({ model }) {
  const [failedImg, setFailedImg] = useState(false);
  console.log('eto modeli', model);
  // if (failedImg) {
  //   return null;
  // }
  return (
    <Link to={`/models/${model.id}/`}>
      <div className="logoBrand">
        <img
          onError={() => { setFailedImg(true); }}
          src={model.img}
          alt=""
          style={{ width: '90px', height: '60px', display: failedImg && 'none' }}
        />
      </div>
      {model.name}
    </Link>
  );
}

export default ModelItem;
