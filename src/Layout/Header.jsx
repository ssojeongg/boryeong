import Logo from "../components/Logo"
import Nav from "../components/Nav"
import "../assets/scss/Header.scss"

const Header = () => {
  return (
    <div className="Header">
      <div className="inner">
        <Logo />
        <Nav />
      </div>
    </div>
  )
}
export default Header