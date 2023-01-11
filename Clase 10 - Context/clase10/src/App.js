import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './containers/CartContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h2>Ruta no encontrada</h2>}/>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
