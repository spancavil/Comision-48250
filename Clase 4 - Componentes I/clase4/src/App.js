import './App.css';
import Ad from './components/Ad';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  const temperatura = 29

  const nombre = "Sebas"

  return (
    <>
      <NavBar 
        temp={temperatura}
        name={nombre}
        />
      <ItemListContainer greeting={"Hola ke ase"}/>
      <Ad>
        <img src="https://imgs.search.brave.com/OaSdZfXa3OI2xbJtSRi7xB7XMBHWxxvYBuWSo1WJl8M/rs:fit:250:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/TGpZemplcTlNUVZF/OGFia1V4Mi1nQUFB/QSZwaWQ9QXBp" />
      </Ad>
    </>
  ); 
}

export default App;
