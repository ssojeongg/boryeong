import "../assets/scss/Nav.scss"

const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <li><a href="javascript:void(0)">전자지도</a></li>
        <li><a href="javascript:void(0)">전자연표</a></li>
        <li><a href="javascript:void(0)">시청각자료</a></li>
        <li><a className="gray" href="javascript:void(0)">이용안내</a></li>
        <li><a className="gray" href="javascript:void(0)">만든사람들</a></li>
      </ul>
    </div>
  )
}
export default Nav