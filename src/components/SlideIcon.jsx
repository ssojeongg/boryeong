import "../assets/scss/SlideIcon.scss"
import slideIconData from '../util/slideIConData.json';
const SlideIcon = () => {
  return (
    <div className="SlideIcon">
      {slideIconData.items.map((data, index) => (
        <div className="slide_icon_area" key={index}>
          <div className="slide_icon_box">
            <img src={data.img} alt={data.title} />
            <h4>{data.title}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}
export default SlideIcon