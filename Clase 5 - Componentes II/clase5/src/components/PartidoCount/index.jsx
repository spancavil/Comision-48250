import React, { useState, useEffect } from 'react'
import './styles.scss'

const PartidoCount = () => {
 
  const [argCount, setArgCount] = useState(0)
  const [frCount, setFrCount] = useState(0)
  const [block, setBlock] = useState(false)

  
  //Si quiero que el callback se ejecute cuando se monta el componente, el array de dependencias []
  useEffect(()=> {
    console.log("Se montó el componente")
    setTimeout(()=> {
      setBlock(true)
      alert("Termino el partido")
    }, 10000)
  }, [])

  useEffect(()=> {
    if (argCount > 0) {
      alert("Gol de Argentina, caramba!")
    }
  }, [argCount])

  useEffect(()=> {
    console.log("Francia metió un gol (de penal seguro)")
  }, [frCount])
  
  const onArgGoal = () => {
    if (!block) {
      setArgCount(argCount + 1)
    }
  }

  const onFrGoal = () => {
    if (!block) {
      setFrCount(frCount + 1)
    }
  }

  const onReset = () => {
    if (block) {
      setArgCount(0)
      setFrCount(0)
    }
  }

  return (
    <div className='match-container'>
        <div className='result-container'>
            <img src='/Assets/argFlag.jpg' alt="arg" style={{width: 60}}/>
            <span>Argentina</span>
            <h3>{argCount}</h3>
            <h3>{frCount}</h3>
            <span>France</span>
            <img src='/Assets/franceFlag.jpg' alt="fr" style={{width: 60}}/>
        </div>
        <div className='button-container'>
            <button className='button-count' onClick={onArgGoal}>Gol de Argentina</button>
            <button className='button-count' onClick={onFrGoal}>Gol de Francia</button>
            <button className='button-count' onClick={onReset}>Reiniciar</button>
        </div>
    </div>
  )
}

export default PartidoCount