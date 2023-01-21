import'./NavBar.css'
import LogoN from './assest/LogoN.png'
import menuL from './assest/menu.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';


const Navbar = () => {


const navigate = useNavigate ()

const {totalQuantity} = useContext (CartContext)

const [menu, setMenu] = useState ( false )

const toggleMenu = () => {
    setMenu (!menu)
}

    return (
    <header className='Container' >
        <div className='ContainerLogo'>
            <img className='Logo' onClick={ () => navigate ('/')} src={LogoN} alt="" />  
        </div>

    
        <button className='ContainerButtom' onClick={toggleMenu } >
                <img className='LogoHamb' src={menuL} alt='Hambur'></img>
        </button>

        <nav className= {`ContainerNav ${ menu ? 'isActive' : '' } `}>
            <ul className='ContainerUl'>
                <li className='Containerli' ><Link to={`/category/Computadora`} className='CategoriesLink'>Computadora</Link></li>
                <li className='Containerli'><Link to={`/category/Notebook`} className='CategoriesLink'>Notebook</Link></li>
                <li className='Containerli'><Link to={`/category/Perifericos`} className='CategoriesLink'>Perifericos</Link></li>
                <li className='Containerli'><CartWidget totalQuantity={totalQuantity}/></li>
            </ul>
        </nav>


     </header>
  
  )
}

export default Navbar;