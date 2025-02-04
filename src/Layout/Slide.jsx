import search from "../../public/img/icon_search_w.png"
import "../assets/scss/Slide.scss"
import SlideIcon from "../components/SlideIcon"
import slideData from '../util/slideData.json';


// import Swiper core and required modules
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = () => {
  return (
    <div className="Slide">
      <div className="search_box">
        <select>
          <option value="통합검색">통합검색</option>
          <option value="본문">본문</option>
          <option value="시청각">시청각</option>
        </select>
        <input type="text" placeholder="검색어입력"/>
        <button><img src={search} alt="search" />SEARCH</button>
      </div>
      <Swiper className='slide_box'
      // install Swiper modules
      modules={[Autoplay,Pagination, Scrollbar, A11y]}
      breakpoints={{
        767 : {
          slidesPerView: 1
        }
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
        {slideData.items.map((data, index) => (
      <SwiperSlide className='slide_in' key={index}>
        <div className="slide_img">
        <img src={import.meta.env.VITE_PUBLIC_URL + data.img} alt={data.title} />
        </div>
        <div className="slide_text">  
        <h4>{data.title}</h4>
        <p>{data.detail}</p>
      </div>
  </SwiperSlide>
  ))}
  </Swiper>
    <div className="slide_area">
      <div className="inner">
        <SlideIcon />
      </div>  
    </div>
    </div>
  )
}
export default Slide