import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hola ke ase"}/>
    </>
  ); 
}

export default App;
