import React from 'react';
import { ClockLoader } from 'react-spinners';

export default function loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ClockLoader color="#58cdff" />
    </div>
  );
}
