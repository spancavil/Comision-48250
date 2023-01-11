import React from 'react';
import './styles.scss';

const Ad = ({children}) => {
  return (
    <div className='ad-container'>
        <div className='ad'>
          {children}
        </div>
    </div>
  )
}

export default Ad