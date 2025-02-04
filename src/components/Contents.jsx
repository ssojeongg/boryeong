import contentsData from '../util/contentsData.json';
import '../assets/scss/Contents.scss'
import plus from '../../public/img/more_gray2.png'

// import Swiper core and required modules
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Contents = () => {
  return (
    <div className="Contents">
      <div className="title">
        <img src={plus} />
        <h2>추천콘텐츠</h2>
      </div>
      <Swiper className='slide_box'
      // install Swiper modules
      modules={[Autoplay,Pagination, Scrollbar, A11y]}
      breakpoints={{
        767 : {
          slidesPerView: 1
        }
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
        {contentsData.items.map((data, index) => (
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
    </div>
  )
}

export default Contents