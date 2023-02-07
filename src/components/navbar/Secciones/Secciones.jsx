import { Link } from "react-router-dom";
const Secciones = () => {
    return (
        <>
        <li className="nav-item">
        <Link className="nav-link" to="/"><button className="btn btn-dark">Inicio</button></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/NuestraHistori"><button className="btn btn-dark">Nuestra Historia</button></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contacto"><button className="btn btn-dark">Contacto</button></Link>
      </li>
      </>
    );
}

export default Secciones;
