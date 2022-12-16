
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='./'>
            <img src='LogoN.png'width='100'/>
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item h3">
                <Link className="nav-link active"  aria-current="page" to='./'>Notebook</Link>
              </li>
              <li className="nav-item h3">
              <Link className="nav-link active" aria-current="page" to='./'>PC</Link>
              </li>
              <li className="nav-item h3">
              <Link className="nav-link active" aria-current="page" to='./'>Periféricos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar