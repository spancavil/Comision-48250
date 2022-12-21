import React from 'react'

const Ad = ({children}) => {
  return (
    <div style={{
        width: '70%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: 'darkolivegreen'
    }}>
        {children}
    </div>
  )
}

export default Ad