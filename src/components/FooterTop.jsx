import '../assets/scss/FooterTop.scss'
import more from "../../public/img/more_white.png"
import bg_info from "../../public/img/bg_info1.jpg"
import map from "../../public/img/img_map2.png"
import book from "../../public/img/img_book.png"
import book2 from "../../public/img/img_book2.png"

const FooterTop = () => {
  return (
    <div className="FooterTop">
      <div className="inner">
        <div className="ft_left">
          <div className="text_box">
            <h4>관광안내 <img src={more} /></h4>
            <p>문화관광안내 사이트로 관광명소의 위치와 정보를 볼 수 있습니다.</p>
          </div>
          <div className="img_box">
            <img src={bg_info} />
            <p>문화관광</p>
          </div>
        </div>
        <div className="ft_right">
        <div className="text_box">
            <h4>배너모음 <img src={more} /></h4>
            <p>많이 사용하는 메뉴를 한번에 확인할 수 있습니다.</p>
          </div>
          <div className="img_area">
            <div className="img_box">
              <img src={map} />
              <p>동여도보기</p>
            </div>
            <div className="img_box">
              <img src={book} />
              <p>고문서보기</p>
            </div>
            <div className="img_box">
              <img src={book2} />
              <p>신증동국여지승람보령현</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FooterTop