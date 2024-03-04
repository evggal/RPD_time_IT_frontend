import "./Header.css"
import logo from "../../images/guap.svg"

function Header () {
    return (
        <header className="header">
            <img src={logo} className="header__logo"></img>
        </header>
    )
}

export default Header;