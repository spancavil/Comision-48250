import React from 'react';
import './styles.scss';

const SpreadPropiedades = ({additionalStyling}) => {
  return (
    <div
        style={
            {...additionalStyling}
        }
        className = {'red'}
    >SpreadPropiedades</div>
  )
}

export default SpreadPropiedades