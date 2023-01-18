import'./NavBar.css'
import LogoN from './assest/LogoN.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


const Navbar = () => {
    const navigate = useNavigate ()

const {totalQuantity} = useContext (CartContext)

    return (
     <nav className='Container'>
        <img onClick={ () => navigate ('/')} src={LogoN} alt="" width="100" /> 
      <div className='Categories'>
          <Link to={`/category/Computadora`} className='CategoriesLink'>Computadora</Link>
          <Link to={`/category/Notebook`} className='CategoriesLink'>Notebook</Link>
          <Link to={`/category/Perifericos`} className='CategoriesLink'>Perifericos</Link>
      </div>
      <CartWidget totalQuantity={totalQuantity} />
     </nav>
  
  )
}

export default Navbar;