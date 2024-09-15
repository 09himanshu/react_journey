import images from '../images/pexels-ash-craig-122861-376464.jpg'

const ResturantsContainers = (props) => (
  <div key={props.id} className="res-cards">
    <img className="res-img" src={props.image} alt="" />
    <h3>{props.name}</h3>
    <h4>{props.food_name}</h4>
    <h5>rating {props.rating}</h5>
    <h5>Rs: {props.price}</h5>
    <p>{props.time} min</p>
  </div>
)

export {ResturantsContainers}