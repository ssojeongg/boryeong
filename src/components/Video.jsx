import '../assets/scss/Video.scss'
import videoData from '../util/videoData.json'
import video from '../../public/img/btn_video_play.png'

// import Swiper core and required modules
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Video = () => {
  return (
    <div className="Video">
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
          <div className="text">
            <h2>동영상</h2>
            <p>특별한 이야기</p>
          </div>
        <img src={video} />
        {videoData.items.map((data, index) => (
      <SwiperSlide className='slide_in' key={index}>
        <div className="slide_img">
        <img src={data.img} alt={data.title} />
        </div>
        <div className="slide_text">  
        <h4>{data.title}</h4>
      </div>
  </SwiperSlide>
  ))}
  </Swiper>
    </div>
  )
}

export default Video