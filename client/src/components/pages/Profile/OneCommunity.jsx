import React from 'react';

export default function OneCommunity({ community }) {
  console.log(community);
  return (
    <div>{community?.car_model}</div>
  );
}
