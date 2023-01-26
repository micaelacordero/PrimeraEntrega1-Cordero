const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Platos</a></li>
                    <li><a className="dropdown-item" href="#">Tazas</a></li>
                    <li><a className="dropdown-item" href="#">Bowls</a></li>
                  </ul>
                </li>
    );
}

export default Categorias;
