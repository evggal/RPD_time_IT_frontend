import "./Header.css"
import logo from "../../images/guap.svg"
import { Link, redirect, useNavigate } from "react-router-dom";
function Header() {
    const route = useNavigate();
    return (
        <header className="header">
            <img style={{cursor:"pointer"}} onClick={()=>route("/")} src={logo} className="header__logo"></img>
        </header>
    )
}

export default Header;
