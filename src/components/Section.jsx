import "../assets/scss/Section.scss"
import search from '../../public/img/icon_15.png'
import speak from '../../public/img/icon_13.png'
import icon_search from '../../public/img/icon_search.png'
import boryeong from '../../public/img/boryeong_tourmap.png'
import plus from '../../public/img/more_gray2.png'
import Video from "./Video"
import Contents from "./Contents"

const Section = () => {
  return (
    <div className="Section">
      <div className="inner">
        <div className="col_1">
          <div className="title">
            <img src={import.meta.env.VITE_PUBLIC_URL + speak} />
            <h2>공지사항</h2>
          </div>
          <table>
            <tr>
              <th>서비스 일시 중단 안내</th>
              <td>24.01.16</td>
            </tr>
            <tr>
              <th>디지털남양주문화대전 공식 오픈</th>
              <td>24.01.03</td>
            </tr>
            <tr>
              <th>「디지털장흥문화대전」 기초조사연구 및 원고집필 사업 연구팀 공모</th>
              <td>23.10.04</td>
            </tr>
            <tr>
              <th>서비스 일시 중단 안내</th>
              <td>23.06.28</td>
            </tr>
          </table>
        </div>
        <div className="col_2">
          <div className="title">
            <h2>보령 한눈에 보기</h2>
          </div>
        </div>
        <div className="col_3">
          <div className="title">
            <img src={search} />
            <h2>통합검색</h2>
          </div>
          <div className="search_area">
            <div className="search_box">
              <div className="search">
                <input type="text" placeholder="검색어를 입력해주세요." />
                <img src={import.meta.env.VITE_PUBLIC_URL + icon_search} />
              </div>
            </div>
              <div className="text_box">
                <dl>
                  <dt>인기검색어 :</dt>
                  <dd>&nbsp;e 성씨, 성주사지, 원산도, 김극성</dd>
                </dl>
                <dl>
                  <dt className="space">인기콘텐츠 :</dt>
                  <dd>&nbsp;문학, 바위, 섬, 보령의 아름다운 산과 섬, 보령시</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col_4">
            <div className="title">
              <img src={import.meta.env.VITE_PUBLIC_URL + plus} />
              <h2>디렉토리분류</h2>
            </div>
          </div>
          <div className="col_5">
            <Contents />
          </div>
          <div className="col_6">
            <Video />
          </div>
          <div className="col_7">
            <div className="title">
              <img src={import.meta.env.VITE_PUBLIC_URL + plus} />
              <h2>내가 쓰는 보령백과</h2>
            </div>
            <ul>
              <li><a href="javascript:void(0)">
              등록된 게시물이 없습니다.
                </a></li>
            </ul>
          </div>
          <div className="col_8">
            <div className="title">
              <img src={import.meta.env.VITE_PUBLIC_URL + plus} />
              <h2>전자지도</h2>
            </div>
            <div className="area">
              <ul>
                <li><a href="javascript:void(0)">웅천읍</a></li>
                <li><a href="javascript:void(0)">주포면</a></li>
                <li><a href="javascript:void(0)">주교면</a></li>
                <li><a href="javascript:void(0)">오천면</a></li>
                <li><a href="javascript:void(0)">천북면</a></li>
                <li><a href="javascript:void(0)">청소면</a></li>
                <li><a href="javascript:void(0)">청라면</a></li>
                <li><a href="javascript:void(0)">남포면</a></li>
                <li><a href="javascript:void(0)">주산면</a></li>
                <li><a href="javascript:void(0)">미산면</a></li>
                <li><a href="javascript:void(0)">성주면</a></li>
                <li><a href="javascript:void(0)">궁촌동</a></li>
                <li><a href="javascript:void(0)">남곡동</a></li>
                <li><a href="javascript:void(0)">내항동</a></li>
                <li><a href="javascript:void(0)">대천동</a></li>
                <li><a href="javascript:void(0)">동대동</a></li>
                <li><a href="javascript:void(0)">명천동</a></li>
                <li><a href="javascript:void(0)">신흑동</a></li>
                <li><a href="javascript:void(0)">요암동</a></li>
                <li><a href="javascript:void(0)">죽정동</a></li>
                <li><a href="javascript:void(0)">화산동</a></li>
              </ul>
            </div>
          </div>
          <div className="col_9">
            <img src={import.meta.env.VITE_PUBLIC_URL + boryeong} />
          </div>
        </div>
      </div>
  )
}
export default Section