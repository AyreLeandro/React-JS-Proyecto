import { Link } from "react-router-dom"
import "./Nav.css"
// import styles from "./Nav.modules.css"

export const Nav = () => {
    return (
        <nav>
            {/*Para agarrar de los estilos modulares*/}
            {/*<ul className={styles["nav-list"]}>*/}
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito</Link>
                </li>
                <li>
                    <Link to={"/formcontainer"}>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}