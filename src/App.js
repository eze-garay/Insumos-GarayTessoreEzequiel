
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <ItemListContainer greeting='Bienvenido a mi e-commers, a continuación podra ver nuestros productos'/>
    </div>
  )
}

export default App;
