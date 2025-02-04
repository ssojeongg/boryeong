import "../assets/scss/Logo.scss"
import logo from "../../public/img/logo.png"

const Logo = () => {
  return (
    <div className="Logo">
      <img src={import.meta.env.VITE_PUBLIC_URL + logo} alt="logo" />
      <h2>디지털보령문화대전</h2>
    </div>
  )
}
export default Logo