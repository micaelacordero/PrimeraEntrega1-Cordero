import { Link } from "react-router-dom";
const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><Link className="dropdown-item" to={"/category/1"}>Bachas</Link></li>
                    <li><Link className="dropdown-item" to={"/category/2"}>Jarritas</Link></li>
                    <li><Link className="dropdown-item" to={"/category/3"}>Jarrones</Link></li>
                    <li><Link className="dropdown-item" to={"/category/4"}>Cuencos</Link></li>
                    <li><Link className="dropdown-item" to={"/category/5"}>Tazas</Link></li>
                    <li><Link className="dropdown-item" to={"/category/6"}>Bowls</Link></li>
                    
                  </ul>
                </li>
    );
}

export default Categorias;
