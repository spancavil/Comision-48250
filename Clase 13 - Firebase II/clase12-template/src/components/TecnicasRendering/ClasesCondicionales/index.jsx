import React from 'react';
import styles from './styles.module.scss';

const ButtonConditional = ({condition}) => {
  return (
    <button
        className={
            condition ? styles.dark : styles.light
        }
    >Click me</button>
  )
}

export default ButtonConditional