import {useState} from 'react'
import { ResturantsContainers } from './Resturants'
import resturant from '../utils/mocData'


const Body = () => {
  const [restuarent, setRestuarent] = useState(resturant)
  
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={() => {
          let filter = resturant.filter((ele) => ele.rating > 4.5)
          setRestuarent(filter)
        }}>
          Top rated restuarant
        </button>
      </div>
      <div className="resturant-container">
        {restuarent.map((ele) => (
          <ResturantsContainers key={ele.id} {...ele} />
        ))}
      </div>
    </div>
  )
}

export { Body }