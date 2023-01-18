import React from 'react'
import Bitcoin from '../../Bitcoin'
import Ethereum from '../../Ethereum'

const ReturnTemprano = ({condition = true}) => {

    if (condition) {
        return (
            <Bitcoin/>
        )
    }

    return (<Ethereum/>)

}

export default ReturnTemprano