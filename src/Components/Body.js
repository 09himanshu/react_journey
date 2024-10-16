import {useState, useEffect} from 'react'
import { ResturantsContainers } from './Resturants'
import resturant from '../utils/mocData'
import Shimmer from './Shimmer'


const Body = () => {
  const [restuarent, setRestuarent] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setTimeout(() => {
      setRestuarent(resturant)
    }, 400)
  }

  return !restuarent.length ? (
    <h1>No data found</h1>
  ) : (
    <div className="body">
      <div className="search">
        <div className="search_resturant">
          <input
            type="text"
            name="text"
            id=""
            className="search_box"
            value={search}
            onChange={(ele) => {
              setSearch(ele.target.value)
            }}
          />
          <button className="search_food" onClick={() => {
            let regex = new RegExp(search, 'i')
            let array = resturant.filter(ele => regex.test(ele.food_name))
            // if(!array.length) return setRestuarent(<h1>No such resturant avaliable </h1>)
            setRestuarent(array)
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filter = resturant.filter((ele) => ele.rating > 4.5)
            setRestuarent(filter)
          }}
        >
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