import bitcoin from './bitcoin.png';

import React from 'react'

const Bitcoin = ({height}) => {
  return (
    <div
        style={{
            height: height | 250
        }}
    >
        <img src={bitcoin} alt="btc"/>
    </div>
  )
}

export default Bitcoin