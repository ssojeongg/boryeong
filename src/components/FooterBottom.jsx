import '../assets/scss/FooterBottom.scss'
import logo from "../../public/img/logo_f.png"

const FooterBottom = () => {
  return (
    <div className="FooterBottom">
      <div className="inner">
        <div className="ft_left">
          <p>COPYRIGHT 2023. 한국학중앙연구원. ALL RIGHTS RESERVED. 대표전화: 031-709-8111</p>
        </div>
        <div className="ft_right">
          <div className="logo">
            <img src={import.meta.env.VITE_PUBLIC_URL + logo} />
            <a href="javascript:void(0)">디지털보령문화대전</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FooterBottom