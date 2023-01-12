import'./NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
     <nav className='Container'>
      <Link to={'/'}>
      <img  src='./LogoN.png' alt="" width="100" />
      </Link>
      <div className='Categories'>
          <Link to={`/category/Computadora`} className='CategoriesLink'>Computadora</Link>
          <Link to={`/category/Notebook`} className='CategoriesLink'>Notebook</Link>
          <Link to={`/category/Perifericos`} className='CategoriesLink'>Perifericos</Link>
      </div>
      <CartWidget />
     </nav>
  
  )
}

export default Navbar;