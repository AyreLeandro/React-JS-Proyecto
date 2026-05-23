import { Link } from "react-router-dom"
import logo from "../../assets/react.svg"
import { Nav } from "../Nav/Nav"
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} alt="Logo de React" />
                </Link>
            </div>
            <Nav />
        </header>
    )
}