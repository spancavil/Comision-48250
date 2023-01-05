import React from 'react'

const ItemDetail = ({detail}) => {
    console.log(detail);
    return (
        <div>{detail.title}</div>
    )
}

export default ItemDetail