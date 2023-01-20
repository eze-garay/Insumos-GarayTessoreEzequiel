
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import { NotificacionProvider } from './notification/NotificationService';


function App() {



  return (
    <div className='App'>
      <NotificacionProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenido"/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos"/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificacionProvider>
    </div>
  )
}

export default App;



