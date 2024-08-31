import { ResturantsContainers } from './Resturants'
const array = [
  {
    res_name: 'Haldiram',
    item: 'Raj kachori',
    rating: '4.4 stars',
    time: '40min',
  },
  {
    res_name: 'D-bapi',
    item: 'biryani',
    rating: '4.2 stars',
    time: '30min',
  },
]
const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="resturant-container">
      {array.map(ele => <ResturantsContainers {...ele}/>)}
    </div>
  </div>
)

export { Body }