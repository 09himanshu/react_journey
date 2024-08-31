import images from '../images/pexels-ash-craig-122861-376464.jpg'

const ResturantsContainers = (props) => (
  <div className="res-cards">
    <img className="res-img" src={images} alt="" />
    <h3>{props.res_name}</h3>
    <h4>{props.item}</h4>
    <h5>{props.rating}</h5>
    <p>{props.time}</p>
  </div>
)

export {ResturantsContainers}