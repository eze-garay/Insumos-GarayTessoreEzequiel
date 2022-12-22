import'./NavBar.css'
import CardWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
    <div className='Container'>
      <div>
        <img src='./LogoN.png' alt="" width="100" />
      </div>
      <nav>
        <ul className='Ul'>
          <li>PC</li>
          <li>Noteboock</li>
          <li>Perifericos</li>
        </ul>
      </nav>
      <CardWidget />
    </div>
  
  )
}

export default Navbar;