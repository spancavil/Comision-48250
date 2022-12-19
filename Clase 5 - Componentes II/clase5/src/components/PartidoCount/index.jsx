import React from 'react'
import './styles.scss'

const PartidoCount = () => {
  return (
    <div className='match-container'>
        <div className='result-container'>
            <img src='/Assets/argFlag.jpg' alt="arg" style={{width: 60}}/>
            <span>Argentina</span>
            <h3>0</h3>
            <h3>0</h3>
            <span>France</span>
            <img src='/Assets/franceFlag.jpg' alt="fr" style={{width: 60}}/>
        </div>
        <div className='button-container'>
            <button className='button-count'>Gol de Argentina</button>
            <button className='button-count'>Gol de Francia</button>
        </div>
    </div>
  )
}

export default PartidoCount