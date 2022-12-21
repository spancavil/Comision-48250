import React from 'react'
import PartidoCount from '../../components/PartidoCount'

const ItemListContainer = ({greeting}) => {

  // Count sería el valor de mi estado, setCount es la función para modificar ese estado.
  // useState es el hook de React que me permite utilizar estados.
  // const [count, setCount] = useState(0)

  // const sumarContador = () => {
  //   console.log("Se va a sumar 1");
  //   setCount(count + 1)
  // }

  return (
    <div>
        <h1>{greeting}</h1>
        {/* <button onClick={sumarContador}>Sumar 1</button>
        <span>{count}</span> */}
        <PartidoCount/>
    </div>
  )
}

export default ItemListContainer